import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {Button} from "semantic-ui-react";

import {TaskComponent} from "../components/TaskComponent";
import {
    completeTaskAction,
    tasksViewOneTaskAction
} from "../actions/TasksActions";
import {deleteTaskRequest} from "../services/ApiService";

class Screen extends PureComponent {
    componentDidMount() {
        tasksViewOneTaskAction(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <Link to="/">
                    <p style={{textAlign: 'center'}}>Go to list</p>
                </Link>

                {
                    !this.props.currentTask
                    && <p style={{textAlign: 'center'}}>Loading...</p>
                }

                {
                    this.props.currentTask
                    && (
                        <div>
                            <TaskComponent item={this.props.currentTask}/>
                            {
                                !this.props.currentTask.isCompleted
                                && <p style={{textAlign: 'center'}}>
                                    <Button
                                        onClick={() => this.props.onCompleteClick(this.props.currentTask.id)}
                                        primary
                                    >
                                        Complete Task
                                    </Button>
                                </p>
                            }
                            <p style={{textAlign: 'center'}}>
                                <Button
                                    onClick={() => this.props.onDeleteClick(this.props.currentTask.id)}
                                    color="red"
                                    size="tiny"
                                >
                                    Delete Task
                                </Button>
                            </p>
                        </div>
                    )
                }
            </div>
        );
    };
}

const mapStateToProps = ({
    tasks: {
        currentTask,
    }
}) => ({
    currentTask,
});

const mapDispatchToProps = (dispatch, props) => ({
    onCompleteClick: id => completeTaskAction(id),
    onDeleteClick: async id => {
        if (await deleteTaskRequest(id)) {
            props.history.push('/');
        }
    },
});

export const TasksViewOneScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Screen);