import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {Button} from "semantic-ui-react";
import {
    Input,
    Segment,
} from 'semantic-ui-react';

import {createTaskRequest} from "../services/ApiService";

const Screen = ({
    onCreateClick,
}) => {
    let textInput;

    return (
        <div>
            <Link to="/">
                <p style={{textAlign: 'center'}}>Go to list</p>
            </Link>

            <Segment>
                <div style={{textAlign: 'center'}}>
                    <h4 style={{textAlign: 'center'}}>Creating A New Task</h4>

                    <Input
                        placeholder="Enter label text..."
                        maxLength="200"
                        ref={input => textInput = input}
                    />

                    <div style={{marginTop: '1em'}}>
                        <Button
                            onClick={() => onCreateClick(textInput.inputRef.current.value)}
                            primary
                        >
                            Create
                        </Button>
                    </div>
                </div>
            </Segment>
        </div>
    );
};

const mapStateToProps = ({

}) => ({

});

const mapDispatchToProps = (dispatch, props) => ({
    onCreateClick: async label => {
        label = label.trim();

        if (label === '') {
            return;
        }

        if (await createTaskRequest(label)) {
            props.history.push('/');
        }
    },
});

export const TasksCreateScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Screen);