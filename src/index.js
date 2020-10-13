import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import {getFirebase,ReactReduxFirebaseProvider,createFirebaseInstance} from 'react-redux-firebase';
import firebase from './Config/firebaseConfig';
import rootReducer from './store/Reducers/rootReducer'


const store = createStore(rootReducer,applyMiddleware(
  thunk.withExtraArgument({getFirebase}
)))

const rrfProps = {
  firebase,
  config:{},
  dispatch:store.dispatch,
  createFirebaseInstance
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
