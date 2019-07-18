import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

import {TaskComponent} from "../components/TaskComponent";
import {
    completeTaskAction,
    tasksViewOnePageOpenedAction
} from "../actions/TasksActions";
import {Button} from "semantic-ui-react";

class Screen extends PureComponent {
    componentDidMount() {
        tasksViewOnePageOpenedAction(this.props.match.params.id);
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

const mapDispatchToProps = () => ({
    onCompleteClick: id => completeTaskAction(id),
});

export const TasksViewOneScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Screen);