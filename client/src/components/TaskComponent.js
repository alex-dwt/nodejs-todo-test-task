import React from 'react';
import Moment from 'react-moment';
import {
    Button,
} from 'semantic-ui-react';

export const TaskComponent = ({
    item: {
        id,
        createdAt,
        isCompleted,
        label,
    }
}) => {
    return (
        <div>
            <p className="created-at">
                <Moment format="hh:mm DD/MM/YYYY">
                    {createdAt}
                </Moment>
            </p>
            <p>Label: {label}</p>
            <p>
                <span className={'status-block ' + (isCompleted ? 'completed' : 'uncompleted')}>
                    {isCompleted ? 'Already Completed' : 'Uncompleted'}
                </span>
            </p>
            {
                !isCompleted
                && <div style={{textAlign: 'center'}}>
                    <Button  primary>Complete Task</Button>
                </div>
            }
        </div>
    );
};