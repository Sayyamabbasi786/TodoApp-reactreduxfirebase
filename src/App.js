import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import SignIn from '../src/components/auth/signin';
import SignUp from '../src/components/auth/signup';
import Dashboard from './components/dashboard/dashboard';
import NavBar from './components/layout/navbar';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
    
      {/* Load Toast container */}
      <ToastContainer />

      <NavBar />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signin" component={SignIn}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
