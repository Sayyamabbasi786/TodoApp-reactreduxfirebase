import React,{useState} from 'react';
import {addTask} from '../../store/Actions/taskActions';
import {connect} from 'react-redux'

function AddTask(props) {


  const [task,setTask]=useState("")
  console.log("task Redex",props.task)

  const handleSubmit = (e)=>{
      e.preventDefault();
      props.addTask(task)
      
      
  }


  return (
    
      <form className="container mt-3" autoComplete="off" 
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
    task:state.task.task
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddTask);
