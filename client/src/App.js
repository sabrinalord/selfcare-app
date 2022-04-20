import './App.css';
import React from "react";
import Header from './components/Header';
import ActivityItem from './components/ActivityItem';
// import NewActivity from './components/NewActivity/NewActivity';
import ActivityForm from './components/NewActivity/ActivityForm';

function App() {

  const activities = [
    {
      id: 'a1',
      title: 'Went for a walk',
      tag: 'physical',
      value: 1,
      date: new Date(2022, 3, 28)
    },
    {
      id: 'a2',
      title: 'Met a friend',
      tag: 'social',
      value: 2,
      date: new Date(2022, 3, 27)
    },
    {
      id: 'a3',
      title: 'Went for a run',
      tag: 'physical',
      value: 2,
      date: new Date(2022, 3, 27)
    }
  ]

  // const addActivityHandler = activity => {
  //   console.log('In app.js');
  //   console.log(activity);
  // }
  return (
    <div>
      <Header>
      </Header>
    <ActivityForm/>
      <ActivityItem
        tag={activities[0].tag}
        amount={activities[0].amount}
        title={activities[0].title}
        date={activities[0].date}
      >
      </ActivityItem>
      <ActivityItem
        tag={activities[1].tag}
        amount={activities[1].amount}
        title={activities[1].title}
        date={activities[1].date}
      >
      </ActivityItem>
      <ActivityItem
        tag={activities[2].tag}
        amount={activities[2].amount}
        title={activities[2].title}
        date={activities[2].date}
      >
      </ActivityItem>


    </div>
  );
}

export default App;
