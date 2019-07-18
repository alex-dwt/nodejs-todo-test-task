import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {
    Table,
} from 'semantic-ui-react';
import {Link} from "react-router-dom";

import {TaskComponent} from "../components/TaskComponent";
import {TasksListPageOpened} from "../actions/TasksActions";

class Screen extends PureComponent {
    componentDidMount() {
        TasksListPageOpened();
    }

    render() {
        return (
            <Table celled striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Tasks list</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        this.props.tasksList.map(task => (
                            <Table.Row key={task.id}>
                                <Table.Cell>
                                    <div style={{float: ' right'}}>
                                        <div>
                                            <Link to={`/view/${task.id}`}>View</Link>
                                        </div>
                                    </div>
                                    <TaskComponent item={task}/>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                    {
                        !this.props.tasksList.length &&
                        <Table.Row>
                            <Table.Cell className="align-center">
                                No Tasks
                            </Table.Cell>
                        </Table.Row>
                    }
                </Table.Body>
            </Table>
        );
    }
}

const mapStateToProps = ({
    tasks: {
        tasksList,
    }
}) => ({
    tasksList,
});

const mapDispatchToProps = dispatch => ({

});

export const TasksListScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Screen);