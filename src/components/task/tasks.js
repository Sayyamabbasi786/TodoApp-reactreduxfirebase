import React from 'react';
import Task from './task';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';


const Tasks=()=> {
  return (
    <React.Fragment>
    <table className="table table-dark mt-3">
    <thead>
      <tr className="text-info">
        <th scope="col">Task</th>
        <th scope="col">Add on</th>
        <th scope="col">status</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <Task />
    </tbody>
  </table>
    </React.Fragment>
  );
}

const mapStateToProps=(state)=>{
  console.log("state",state)
  const tasks = state.firestore.ordered.tasks;
  return{
    tasks:tasks
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect(ownProps=>[
    {
      collection:"tasks",
      orderBy:['createdAt','desc']
    }
  ])
)(Tasks);

