import React from 'react'
import {useState} from 'react';
import '../styles/TableList.css'
let className;
let diff;
export default function TableItem({assignments, setAssignments}) {


  let arr = assignments;
  function completeAssignment(currAssignment) {
    setAssignments(
      assignments.filter(a =>
        a.id !== currAssignment.id
      )
    )
  }
  return (
    <tbody>
      {arr.map(assignment => {
        const { courseId, assignmentName, dueDate, percentage, completed, id} = assignment;
        [className, diff] = getDate(dueDate);
        return (
          <tr key={id} className={className}>
              <td>{courseId}</td>
              <td>{assignmentName}</td>
              <td>{diff}</td>
              <td>{percentage}</td>
              <td><input type='checkbox' checked={completed} onChange={() => completeAssignment(assignment)}></input></td>
            </tr>
          )
        })}
    </tbody>
  )
}
function getDate(dueDate) {
  let diff = Math.abs(new Date(dueDate).getTime() - new Date().getTime());
  
  diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (diff <= 7){
    return ['red', diff]
  }
  else if(diff <= 14 && diff > 7) {
    return ['yellow', diff]
  }
  else if(diff > 14) {
    return ['green', diff]
  }
}


