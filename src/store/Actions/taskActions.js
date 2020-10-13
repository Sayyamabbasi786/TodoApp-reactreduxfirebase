import {timestamp} from '../../Config/firebaseConfig';

export const addTask = (task)=>{

    return async(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore();
        firestore
        .collection("tasks")
        .add({
            task,
            createdAt:timestamp()
        }).then(()=>{
            dispatch({
                type:"ADD_TASK",
                task
            })
        }).catch((err)=>{
            dispatch({
                type:"ADD_TASK_ERR",
                err
            })
        })
    }

}
