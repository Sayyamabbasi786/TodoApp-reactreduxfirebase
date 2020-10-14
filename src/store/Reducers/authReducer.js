import { toast } from "react-toastify";

const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      toast("Welcome back");
      return state;
    }
    case "SIGN_IN_ERR": {
      toast.error("Sign In Error");
      return state;
    }
    case "SIGN_OUT":{
        toast("You signed out!");
        return state;
    }
    case "SIGN_UP":{
        toast("Welcome!");
        return state;
    }
    case "SIGN_UP_ERR":{
        toast("Sign up error")
        return state;
    }
    default:
      return state;
  }
};

export default AuthReducer;
