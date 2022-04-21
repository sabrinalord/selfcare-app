import './App.css';
import React from "react";
import Header from './components/Header';
import ActivityItem from './components/ActivityItem';
import ActivityForm from './components/NewActivity/ActivityForm';
import ProgressBarContainer from './components/ProgressBars/ProgressBarContainer';


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

  return (
    <div>
      <Header>
      </Header>
    <ActivityForm/>

    <ProgressBarContainer />
      <ActivityItem
        tag={activities[0].tag}
        amount={activities[0].amount}
        title={activities[0].title}
        date={activities[0].date}
      >
      </ActivityItem>
     


    </div>
  );
}

export default App;
