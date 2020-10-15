import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import {getFirebase,ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
import firebase from './Config/firebaseConfig';
import rootReducer from './store/Reducers/rootReducer';

//To solve dashboard reloading problem we importing
//these two below libraries. dashboard shows sign in 
//component untill it get uid from firebase

import {useSelector} from 'react-redux';
import {isLoaded} from 'react-redux-firebase'


const store = createStore(rootReducer,applyMiddleware(
  thunk.withExtraArgument({getFirebase}
)))

const rrfProps = {
  firebase,
  config:{},
  dispatch:store.dispatch,
  createFirestoreInstance
}



function AuthIsLoaded ({children}){

  const auth = useSelector(state=>state.firebase.auth);

  if(!isLoaded(auth)){
    return (
      <div className="container align-items-center"
      style={{marginTop:'49vh'}}
      >
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
