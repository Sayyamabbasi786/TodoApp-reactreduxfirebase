import React,{useState} from 'react';
import {signUp} from '../../store/Actions/authActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


function SignUp({signUpAction,authUid}) {


  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleSubmit = (e)=>{
      e.preventDefault()
      signUpAction({
        email,
        password
      })
  }


  return (
    <React.Fragment>
    { authUid?(
      <Redirect to="/" />
    ):(
      <form className="container mt-3" autoComplete="off" 
          onSubmit={handleSubmit}>
          <div className="form-group">
          <legend className="mt-3"><h4>Sign Up</h4></legend>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit 
          </button>
        </form>
    )} 
      </React.Fragment>
  );
}

const mapStateToProps=(state)=>{
  
  return{
    authUid:state.firebase.auth.uid
  }

}

const mapDispatchToProps = (dispatch)=>{
  return{
    signUpAction: (cred)=>{dispatch(signUp(cred))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
