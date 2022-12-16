import React from 'react'
import { useState, useEffect } from 'react';
import Table from './Table';
import '../styles/Form.css'
export default function Form() {
  const initialAssignments = localStorage.assignments ? JSON.parse(localStorage.getItem('assignments')) : []
  const [assignments, setAssignments] = useState(initialAssignments)
  const [assignment, setAssignment] = useState({
    courseId: '',
    assignmentName: '',
    dueDate: '',
    time: '12:00',
    percentage: ''
  })
  
  function handleChange(event) {
    const input = event.target.value;
      setAssignment({
        ...assignment,
        [event.target.name]: input,
        completed: false,
        id: crypto.randomUUID()
      }) 
  }
  useEffect(() => {
    localStorage.setItem('assignments', JSON.stringify(assignments))
  }, [assignments])


  function handleAdd(event) {
    event.preventDefault();
  
    const inputArray = Array.from(document.querySelectorAll('.form-input'));

    const isntEmpty = inputArray.every(element => element.value !== '')


    if(isntEmpty) {
      setAssignments([
        ...assignments,
        assignment,
      ])
      const newAssignment = {
        courseId: '',
        assignmentName: '',
        dueDate: '',
        time: '12:00',
        percentage: ''
      }
      setAssignment(newAssignment)
    }
  }
  function handleReset(e) {
    e.preventDefault();
    const newAssignment = {
      courseId: '',
      assignmentName: '',
      dueDate: '',
      time: '12:00',
      percentage: ''
    }
    setAssignment(newAssignment)
  }
  return (
    <main>
    <form id='form'>
      <div className='grid'>

        <div>
          <label htmlFor='courseId'>Course ID</label><br/>
          <input type='text' id='courseId' maxLength='20' className='form-input'name='courseId' value={assignment.courseId} onChange={(e) => handleChange(e)}></input>
        </div>

        <div>
        <label htmlFor='assignmentName'>Assignment name</label><br/>
        <input type='text' id='assignmentName' maxLength='25' className='form-input'name='assignmentName' value={assignment.assignmentName} onChange={(e) => handleChange(e)}></input>
        </div>
        <div className='flex-container'>
          <div>
            <label htmlFor='dueDate'>Due Date</label><br/>
            <input type='date' id='dueDate' className='form-input'name='dueDate' value={assignment.dueDate} onChange={(e) => handleChange(e)}></input>
          </div>

          <div>
            <label htmlFor='time'>Time</label><br/>
            <input type='time' id='time' className='form-input'name='time' value={assignment.time} onChange={(e) => handleChange(e)}></input>
          </div>

          <div>
            <label htmlFor='percentage'>Percentage</label><br/>
            <input type='number' id='percentage' min='0' max='100' className='form-input'name='percentage' value={assignment.percentage} onChange={(e) => handleChange(e)}></input>
            <span className="span-percent">%</span>
          </div>
        </div>
      </div>
      <div className='btn-container'>
      <button onClick={(e) => handleReset(e)} className='form-btn reset-btn'>Reset Fields</button>
      <button onClick={(e) => handleAdd(e)} className='form-btn submit-btn'>Add to schedule</button>
      </div>
    </form>
    <Table assignments={assignments} setAssignments={setAssignments}/>
    </main>
  )
}
