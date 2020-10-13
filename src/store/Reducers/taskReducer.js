const initialState = {
    task:null,
    errMsg:null
}

 const taskReducer =(state=initialState,action)=>{

    switch(action.type){
        case "ADD_TASK":
            return{
                ...state,
                task:action.task
            }
        case "ADD_TASK_ERR":
            return{
                ...state,
                errMsg:action.err
            }
        default: 
            return state
    }

}

export default taskReducer