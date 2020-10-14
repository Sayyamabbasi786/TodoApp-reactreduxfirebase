import React from 'react';
import {Link} from 'react-router-dom';
import {signOut} from '../../store/Actions/authActions';
import {connect} from 'react-redux'


function NavItems({ActionSignOut,authUid}) {

  const handleSignOut = ()=>{
    ActionSignOut()
  }

  return (
    <React.Fragment>
      {authUid ? (
        <Link
          to="/signin"
          className="nav-link text-white"
          onClick={handleSignOut}>
          Sign Out
        </Link>
      ) : (
        <React.Fragment>
          <Link to="/signin" className="nav-link text-white">
            Sign In
          </Link>
          <Link to="/signup" className="nav-link text-white">
            Sign Up
          </Link>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state)=>{
  return{
    authUid : state.firebase.auth.uid
  }
}

const mapDispatchProps = (dispatch)=>{
  return{
    ActionSignOut:()=>{dispatch(signOut())}
  }
}

export default connect(mapStateToProps,mapDispatchProps)(NavItems);
