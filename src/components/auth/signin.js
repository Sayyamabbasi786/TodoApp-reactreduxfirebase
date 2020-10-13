import React,{useState} from 'react';


function SignIn() {


  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")

  const handleSubmit = (e)=>{
      e.preventDefault()
      console.log("email",email)
      console.log("pass",pass)
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
            onChange={(e)=>{setPass(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login 
        </button>
      </form>
    
  );
}

export default SignIn;
