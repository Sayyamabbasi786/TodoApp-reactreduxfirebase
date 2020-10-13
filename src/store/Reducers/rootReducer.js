import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import TaskReducer from './taskReducer';

const rootReducer = combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    task:TaskReducer
})

export default rootReducer;

