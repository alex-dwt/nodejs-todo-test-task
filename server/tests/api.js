const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const {
    app,
    TASKS_URL,
    APP_STARTED_EVENT,
} = require('../index');
const CreateTaskHandler = require('../handlers/CreateTaskHandler');

chai.use(chaiHttp);

const agent = chai.request.agent(app);

before(function (done) {
    this.timeout(5000);

    app.on(APP_STARTED_EVENT, function(){
        done();
    });
});

describe('Testing "get" endpoints:', () => {
    it('It should get a list of tasks', done => {
        agent
            .get(TASKS_URL)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('items');
                done();
            });
    });

    it('It should get one task', done => {
        CreateTaskHandler('label').then(task => {
            if (!task) {
                throw new Error('Can not create a task');
            }

            agent
                .get(`${TASKS_URL}/${task.id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    done();
                });
        });
    });

    it('It should not get a nonexistent task', done => {
        agent
            .get(`${TASKS_URL}/caae2c29-97ca-4a02-bbad-dcd3592677a9`)
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});

describe('Testing "create" endpoints:', () => {
    it('It should create a task', done => {
        agent
            .post(`${TASKS_URL}`)
            .send({
                label: 'label',
            })
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.an('object');
                done();
            });
    });
});

describe('Testing "update" endpoints:', () => {
    it('It should update a task', done => {
        CreateTaskHandler('label').then(task => {
            if (!task) {
                throw new Error('Can not create a task');
            }

            agent
                .put(`${TASKS_URL}/${task.id}`)
                .send({
                    label: 'label',
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    done();
                });
        });
    });

    it('It should not update a nonexistent task', done => {
        agent
            .put(`${TASKS_URL}/caae2c29-97ca-4a02-bbad-dcd3592677a9`)
            .send({
                label: 'label',
            })
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});

describe('Testing "complete" endpoints:', () => {
    it('It should complete a task', done => {
        CreateTaskHandler('label').then(task => {
            if (!task) {
                throw new Error('Can not create a task');
            }

            agent
                .put(`${TASKS_URL}/${task.id}/complete`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    done();
                });
        });
    });

    it('It should not complete a nonexistent task', done => {
        agent
            .put(`${TASKS_URL}/caae2c29-97ca-4a02-bbad-dcd3592677a9`)
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});

describe('Testing "remove" endpoints:', () => {
    it('It should remove a task', done => {
        CreateTaskHandler('label').then(task => {
            if (!task) {
                throw new Error('Can not create a task');
            }

            agent
                .delete(`${TASKS_URL}/${task.id}`)
                .end((err, res) => {
                    res.should.have.status(204);
                    done();
                });
        });
    });

    it('It should remove a nonexistent task', done => {
        agent
            .delete(`${TASKS_URL}/caae2c29-97ca-4a02-bbad-dcd3592677a9`)
            .end((err, res) => {
                res.should.have.status(204);
                done();
            });
    });
});