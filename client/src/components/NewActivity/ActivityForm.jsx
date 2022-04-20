import './ActivityForm.css';
import React, { useState } from 'react';
import axios from '../../apis/axios';


const ActivityForm = () => {

    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredIntensity, setEnteredIntensity] = useState('');
    const [enteredType, setEnteredType] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const descriptionChangeHandler = (event) => [
        setEnteredDescription(event.target.value)
    ]

    const intensityChangeHandler = (event) => [
        setEnteredIntensity(event.target.value)
    ]

    const typeChangeHandler = (event) => [
        setEnteredType(event.target.value)
    ]

    const dateChangeHandler = (event) => [
        setEnteredDate(event.target.value)
    ]

    const submitActivityForm = async (event) => {
        event.preventDefault(); // stop the page from reloading
         axios.post('api/activity', {
                description: enteredDescription,
                intensity: enteredIntensity,
                type: enteredType,
                date: new Date(enteredDate)
      
        })
        .catch((error) => {
            console.log(error);
        });

        setEnteredDescription('');
        setEnteredIntensity('');
        setEnteredType('');
        setEnteredDate('');

  
    };

   

  
    return (
        <div className="activity-form">
            <form onSubmit={submitActivityForm}>
                <div className='activity-form-item'>
                    <label>Description</label>
                    <input placeholder='E.g. Went for a walk' type='text' onChange={descriptionChangeHandler} name="activityDescricption" value={enteredDescription}/>
                </div>
                <div className='activity-form-item'>
                    <label>Intensity</label>
                    <input type='number' min='0' max='5' onChange={intensityChangeHandler} name="activityIntensity" value={enteredIntensity} />
                </div>
                <div className='activity-form-item'>
                    <label>Type</label>
                    <div onChange={typeChangeHandler} name="activityType" value={enteredType}>
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
                    <input type='date' min='2022-01-01' onChange={dateChangeHandler} name="activityDate" value={enteredDate} />
                </div>
                <div className='activity-actions'>
                    <button type="submit">Add activity</button>
                </div>
            </form>
        </div>

    )
}


export default ActivityForm;