import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

import {TaskComponent} from "../components/TaskComponent";
import {
    TasksViewOnePageOpened
} from "../actions/TasksActions";

class Screen extends PureComponent {
    componentDidMount() {
        TasksViewOnePageOpened(this.props.match.params.id);
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
                    && <TaskComponent item={this.props.currentTask}/>
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

const mapDispatchToProps = dispatch => ({

});

export const TasksViewOneScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Screen);