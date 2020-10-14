import React,{useState} from 'react';
import {signIn} from '../../store/Actions/authActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


function SignIn({signInAction,authUid}) {


  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  

  const handleSubmit = (e)=>{
      e.preventDefault()
      signInAction({
        email,
        password
      })
  }

  if(authUid)
  {
    return(
      <Redirect to="/" />
    )
  }
  return (
    
      <form className="container mt-3" autoComplete="off" 
        onSubmit={handleSubmit}>
        <div className="form-group">
        <legend className="mt-3"><h4>Sign In</h4></legend>
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
          Login 
        </button>
      </form>
    
  );
}

const mapDispatchToProps=(dispatch)=>{

  return{
    signInAction : (cred)=>dispatch(signIn(cred))
  }
}

const mapStateToProps=(state)=>{
  
  return{
    authUid:state.firebase.auth.uid
  }

}


export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
