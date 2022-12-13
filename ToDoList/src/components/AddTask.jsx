import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuid } from 'uuid'
const AddTask = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      id: uuid(),
      title: props.title,
      completed: false,
    }
    props.setTasks([...props.tasks, newTask])
    props.setTitle('')
  }
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="form-group border my-5"
      >
        <input
          type="text"
          placeholder="Add ur task here"
          onChange={(e) => props.setTitle(e.target.value)}
          className="form-control"
          value={props.title}
        />
        <input
          type="submit"
          value="Add Task"
          className="btn btn-outline-success btn-block"
        />
      </form>
    </div>
  )
}

export default AddTask
