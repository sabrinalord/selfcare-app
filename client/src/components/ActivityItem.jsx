import React, { useState } from 'react';
import './ActivityItem.css';

const ActivityItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    }
    return (
        <div className="activity-item">
            <h2>{title}</h2>
            <h2>{props.tag}</h2>
            <h2>{props.date.toLocaleString('en-GB')}</h2>
            <button onClick={clickHandler}>Change activity</button>

        </div>

    )
}


export default ActivityItem;