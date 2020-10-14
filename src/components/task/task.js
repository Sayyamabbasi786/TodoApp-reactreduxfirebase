import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {removeTask,toggleChecked} from '../../store/Actions/taskActions';
import Check from './check'


function Task({task,removeTaskAction,toggleTaskAction}) {

const handleDelete =()=>{
  removeTaskAction(task)
}
  
  const taskToggle =()=>{
    console.log("toggling task")
    toggleTaskAction(task)
  }
  return (
    
      <tr>
        <th scope="row">{task.task}</th>
        <td>{task.createdAt && 
          moment(task.createdAt.toDate()).calendar()}
        </td>
        <td>
            <Check checked={task.checked} onClick={taskToggle}/>
        </td>
        <td>
            <span className="material-icons text-danger" 
            style={{cursor:'pointer'}}
            onClick={handleDelete}
            >
            delete
            </span>
        </td>
      </tr>
  );
}

const mapDispatchToProps =(diptach)=>{
  return{
    removeTaskAction :(task)=>diptach(removeTask(task)),
    toggleTaskAction : (task)=>diptach(toggleChecked(task))
  }
}

export default connect(null,mapDispatchToProps)(Task);
