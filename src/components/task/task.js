import React from 'react';


function Task() {
  return (
    
      <tr>
        <th scope="row">1</th>
        <td>First Task</td>
        <td>
            <span className="material-icons"
            style={{cursor:'pointer'}}>
            check_circle
            </span>
        </td>
        <td>
            <span className="material-icons text-danger" 
            style={{cursor:'pointer'}}>
            delete
            </span>
        </td>
      </tr>
  );
}

export default Task;
