import {toast} from 'react-toastify';



 const taskReducer =(state={},action)=>{

    switch(action.type){
        case "ADD_TASK":{
            toast.success("Added a task")
            return state
        }
          
        case "ADD_TASK_ERR":
            {
                toast.error("An Error Occured")
                return state
            }

        case "REMOVE_TASK":
            {
                toast.warn("A task was removed")
                return state
            }
        case "REMOVE_TASK_ERR":
            {
                toast.error("An Error Occured while removing task")
                return state
            }
        case "TOGGLE_CHECKED":
            {
                toast.info("Task status changed")
                return state
            }
        case "TOGGLE_CHECKED_ERR":
            {
                toast.err("Error occured while changin task status")
                return state
            }

        default: 
            return state
    }

}

export default taskReducer