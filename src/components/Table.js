import React, { useState } from 'react'
import TableItem from './TableItem';

export default function Table({assignments, setAssignments}) {

  const [sortState, setSortState] = useState({
    date: false,
    id: false,
  })

  function sortArrayDate() {
    if(sortState.date) {
      let sortedDate = [...assignments]
    sortedDate = sortedDate.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate))
    setAssignments([...sortedDate])
    setSortState({
      ...sortState,
      data: !sortState.date
    })
    return
    } else {
      let sortedDate = [...assignments]
      sortedDate = sortedDate.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
      setAssignments([...sortedDate])
      setSortState({
        ...sortState,
        data: !sortState.date
      })
      return
    }
  }
  function sortArrayId() {
    let sortedId = [...assignments];
    sortedId = sortedId.sort((a, b) => a.courseId - b.courseId);
    setAssignments([...sortedId])
  }
  
 
  return (
    <table cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th onClick={sortArrayId}>Course ID</th>
          <th>Assignment Name</th>
          <th onClick={sortArrayDate}>Days Left</th>
          <th>%</th>
          <th>Complete</th>
        </tr>
      </thead>
        <TableItem assignments={assignments} setAssignments={setAssignments}/>
    </table>
  )
}

// function getDiff(date) {
//   const currentDate = new Date().getTime();
//   const assignmentDate = new Date(date).getTime();
//   const diff = Math.abs(assignmentDate - currentDate);
//   const daysDiff = diff / (1000 * 60 * 60 * 24) 
//   if(daysDiff < 1) {
//     const hours = daysDiff * 24
//     const minutes = hours * 60 % 60
//     return `${Math.floor(hours)} ${Math.ceil(minutes)}`
//   }
//   return Math.ceil(daysDiff);
// }

  // <div>
    //   <label>Sort by date
    //   <input type="checkbox" onChange={() => {
    //     setSort(!sort)
    //   }}></input>
    //   </label>
    //   <ul>
        // {arr.map((assignment, index) => {
        //   const { courseId, assignmentName, dueDate, percentage} = assignment;
        //   return (
        //     <li key={index}> Due date {dueDate} {assignmentName}</li>
        //   )
        // })}
    //   </ul>
    // </div>