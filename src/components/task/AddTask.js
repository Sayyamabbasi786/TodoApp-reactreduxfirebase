import React,{useState} from 'react';
import {addTask} from '../../store/Actions/taskActions';
import {connect} from 'react-redux'

function AddTask({authorId,addTask}) {


  const [task,setTask]=useState("")
  const [checked,setChecked]=useState(false)
  

  const handleSubmit = (e)=>{
      e.preventDefault();
      addTask({
        task,
        checked,
        authorId
      })
      
      //we will reset form using vanilla JS
      document.getElementById("clearTaskForm").reset();
  }


  return (
    
      <form 
        id="clearTaskForm"
        className="container mt-3 " 
        autoComplete="off" 
        onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task">Add Task</label>
          <input
            type="text"
            className="form-control"
            id="task"
            onChange={(e)=>{setTask(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add 
        </button>
      </form>
    
  );
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addTask : (task)=>{dispatch(addTask(task))}
  }
}

const mapStateToProps = (state)=>{
  return{
    task:state.task.task,
    authorId:state.firebase.auth.uid
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddTask);
