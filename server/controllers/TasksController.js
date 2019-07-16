const express = require('express');
const router = express.Router();

const TasksRepository = require('../repositories/TasksRepository');
const CreateTaskHandler = require('../handlers/CreateTaskHandler');
const UpdateTaskHandler = require('../handlers/UpdateTaskHandler');
const CompleteTaskHandler = require('../handlers/CompleteTaskHandler');
const DeleteTaskHandler = require('../handlers/DeleteTaskHandler');

const ERROR_NOT_FOUND_TEXT = 'Task is not found';
const ERROR_INTERNAL_TEXT = 'Internal server error';

// list
router.get('/', (req, res) => {
    TasksRepository
        .getList()
        .then(items => res.json({
            items
        }));
});

// one
router.get('/:id', (req, res) => {
    TasksRepository
        .getOneById(req.params.id)
        .then(item => item
            ? res.json(item)
            : res.status(404).json({
                message: ERROR_NOT_FOUND_TEXT,
            })
        );
});

// complete
router.put('/:id/complete', (req, res) => {
    CompleteTaskHandler(req.params.id)
        .then(item => item
            ? res.json(item)
            : res.status(404).json({
                message: ERROR_NOT_FOUND_TEXT,
            })
        );
});

// create
router.post('/', (req, res) => {
    CreateTaskHandler(req.body.label)
        .then(item => item
            ? res.status(201).json(item)
            : res.status(500).json({
                message: ERROR_INTERNAL_TEXT,
            })
        );
});

// update
router.put('/:id', (req, res) => {
    UpdateTaskHandler(req.params.id, req.body.label)
        .then(item => item
            ? res.json(item)
            : res.status(404).json({
                message: ERROR_NOT_FOUND_TEXT,
            })
        );
});

// delete
router.delete('/:id', (req, res) => {
    DeleteTaskHandler(req.params.id)
        .then(() => res.status(204).send({}));
});

module.exports = router;