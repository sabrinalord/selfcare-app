import React from 'react';

import ActivityForm from './ActivityForm';
import './NewActivity.css';

const NewActivity = (props) => {

    const saveActivityDataHandler = (enteredActivityData) => {
        const activityData = {
            ...enteredActivityData,
            id: Math.random().toString()
        };
        props.onAddActivity(activityData);
    }

    return (
        <div className='new-activity'>
            <ActivityForm onSaveActivityData={saveActivityDataHandler} />
        </div>
    )
}


export default NewActivity;

