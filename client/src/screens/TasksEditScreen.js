import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {Button, Input, Segment} from "semantic-ui-react";

import {
    tasksViewOneTaskAction
} from "../actions/TasksActions";
import {editTaskRequest} from "../services/ApiService";

class Screen extends PureComponent {
    constructor() {
        super();

        this.textInput = React.createRef();
    }

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
                    &&
                        <Segment>
                            <div style={{textAlign: 'center'}}>
                                <h4 style={{textAlign: 'center'}}>Editing The Task</h4>

                                <Input
                                    maxLength="200"
                                    ref={this.textInput}
                                    defaultValue={this.props.currentTask.label}
                                />

                                <div style={{marginTop: '1em'}}>
                                    <Button
                                        onClick={
                                            () => this.props.onSaveClick(
                                                this.props.currentTask.id,
                                                this.textInput.current.inputRef.current.value
                                            )
                                        }
                                        primary
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </Segment>
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
    onSaveClick: async (id, label) => {
        label = label.trim();

        if (label === '') {
            return;
        }

        if (await editTaskRequest(id, label)) {
            props.history.push('/');
        }
    },
});

export const TasksEditScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Screen);