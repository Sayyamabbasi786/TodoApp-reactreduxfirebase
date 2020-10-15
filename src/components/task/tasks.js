import React from 'react';
import Task from './task';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';


const Tasks=(props)=> {
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
    {props.tasks&&props.tasks.map(task=>{
      return(
        <Task key={task.id} task={task}/>
      )
    })}
      
    </tbody>
  </table>
    </React.Fragment>
  );
}

const mapStateToProps=(state)=>{
  
  const fireStoreTasks = state.firestore.ordered.tasks;
  
  return{
    tasks:fireStoreTasks,
    authUid:state.firebase.auth.uid
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps)=>[
    {
      collection:"tasks",
      where:['authorId','==',ownProps.authUid], //after apply auth rules
      orderBy:['createdAt','desc']
    }
  ])
)(Tasks);

