import React from 'react';
import AddTask from '../task/AddTask';
import Task from '../task/tasks'


function Dashboard() {
  return (
    <div className="container">
        <AddTask />
        <Task />
    </div>
  );
}

export default Dashboard;
