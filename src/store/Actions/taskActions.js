import {timestamp} from '../../Config/firebaseConfig';

export const addTask = (task)=>{

    return (dispatch,getState,{getFirebase})=>{

        //if you want to use some state value in here then 
        //use getState

        const firestore = getFirebase().firestore();

        const authorId = getState().firebase.auth.uid;
        // console.log("get state author id",authorId)
        // getState is undefined here 

        firestore
        .collection("tasks")
        .add({
            ...task,
            authorId,
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


export const removeTask = (task)=>{

    return (dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore();
        firestore
        .collection("tasks")
        .doc(task.id)
        .delete()
        .then(()=>{
            dispatch({
                type:"REMOVE_TASK",
                task
            })
        }).catch((err)=>{
            dispatch({
                type:"REMOVE_TASK_ERR",
                err
            })
        })
    }

}


export const toggleChecked = (task)=>{

    return (dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore();
        firestore
        .collection("tasks")
        .doc(task.id)
        .set({
            ...task,
            checked:!task.checked
        },
        { merge:true })
        .then(()=>{
            dispatch({
                type:"TOGGLE_CHECKED",
                task
            })
        }).catch((err)=>{
            dispatch({
                type:"TOGGLE_CHECKED_ERR",
                err
            })
        })
    }

}