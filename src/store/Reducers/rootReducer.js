import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import TaskReducer from './taskReducer';
import AuthReducer from './authReducer'

const rootReducer = combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    task:TaskReducer,
    auth:AuthReducer
})

export default rootReducer;

