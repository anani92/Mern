import React, { useState } from 'react'

const Task = (props) => {
  return (
    <div className="d-flex">
      <h4>
        {props.taskTitle}{' '}
        <span
          onClick={props.handleDelete}
          className="btn btn-outline-secondary"
        >
          {' '}
          <i className="fas fa-trash text-danger"></i>
        </span>
        <span
          onClick={props.toggleComplete}
          className="btn btn-outline-secondary"
        >
          {props.isComplete ? (
            <i className="fa-regular fa-circle-check text-success"></i>
          ) : (
            <i className="fa-regular fa-circle-check text-primary"></i>
          )}
        </span>
      </h4>
    </div>
  )
}

export default Task
