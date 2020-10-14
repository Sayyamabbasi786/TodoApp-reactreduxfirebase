import React from "react";
import AddTask from "../task/AddTask";
import Task from "../task/tasks";
import fbConfig from "../../Config/firebaseConfig";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Dashboard({ authUid }) {
  const [tasks, setTasks] = React.useState([]);
  console.log("direct from firestore", tasks);

  React.useEffect(() => {
    const firestor = fbConfig.firestore();
    firestor.collection("tasks").onSnapshot((snap) => {
      let tempDoc = [];
      snap.forEach((doc) => {
        tempDoc.push({ ...doc.data(), id: doc.id });
      });
      setTasks(tempDoc);
    });
  }, []);

  return (
    <div className="container">
      {authUid ? (
        <React.Fragment>
          <AddTask />
          <Task />
        </React.Fragment>
      ) : (
        <Redirect to="/signin" />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authUid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(Dashboard);
