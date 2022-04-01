import './ActivityForm.css';
import React, { useState } from 'react';

const ActivityForm = (props) => {
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredIntensity, setEnteredIntensity] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredType, setEnteredType] = useState('');

    const descriptionChangedHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const intensityChangedHandler = (event) => {
        setEnteredIntensity(event.target.value);
    }

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const typeChangedHandler = (event) => {
        setEnteredType(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); // stop the page from reloading
        const activityData = {
            description: enteredDescription,
            intensity: enteredIntensity,
            type: enteredType,
            date: new Date(enteredDate)
        };
        props.onSaveActivityData(activityData);
        setEnteredDescription('')
        setEnteredIntensity('')
        setEnteredType('')
        setEnteredDate('')
    };
    return (
        <div className="activity-form">
            <form onSubmit={submitHandler}>
                <div className='activity-form-item'>
                    <label>Description</label>
                    <input placeholder='E.g. Went for a walk' type='text' onChange={descriptionChangedHandler} value={enteredDescription}/>
                </div>
                <div className='activity-form-item'>
                    <label>Intensity</label>
                    <input type='number' min='0' max='5' onChange={intensityChangedHandler} value={enteredIntensity} />
                </div>
                <div className='activity-form-item'>
                    <label>Type</label>
                    <div onChange={typeChangedHandler} value={enteredType}>
                        <input type="radio" value="Emotional" name="tag" /> Emotional
                        <input type="radio" value="Mental" name="tag" /> Mental
                        <input type="radio" value="Physical" name="tag" /> Physical
                        <input type="radio" value="Practical" name="tag" /> Practical
                        <input type="radio" value="Spiritual" name="tag" /> Spiritual
                        <input type="radio" value="Social" name="tag" /> Social
                    </div>
                </div>
                <div className='activity-form-item'>
                    <label>Date</label>
                    <input type='date' min='2022-01-01' onChange={dateChangedHandler} value={enteredDate} />
                </div>
                <div className='activity-actions'>
                    <button type='submit'>Add activity</button>
                </div>
            </form>
        </div>

    )
}


export default ActivityForm;