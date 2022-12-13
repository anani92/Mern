import React, { useState } from 'react'
import Task from './Task'
import AddTask from './AddTask'

const Container = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompleted] = useState([])
  const [task, setTask] = useState({ id: '', title: '', completed: false })
  const [title, setTitle] = useState('')
  const handleDelete = (id) => {
    console.log(tasks)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleEdit = (id, updtedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...tasks, task: updtedTask }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        setCompleted([...completedTasks, task])

        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const clearList = () => {
    setTasks([])
  }
  return (
    <div>
      <h1>ToDo App</h1>

      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        title={title}
        setTitle={setTitle}
        task={task}
        setTask={setTask}
      />
      <div className="table table-light">
        <h3>Your ToDos</h3>
        {tasks.map((todo, i) =>
          !todo.completed ? (
            <Task
              key={i}
              taskTitle={todo.title}
              id={todo.id}
              isComplete={todo.completed}
              handleDelete={() => handleDelete(todo.id)}
              handleEdit={() => handleEdit(todo.id)}
              toggleComplete={() => toggleComplete(todo.id)}
            />
          ) : (
            ''
          )
        )}
      </div>
      <div className=" table table-light">
        <h3>Done</h3>
        {tasks.map((todo, i) =>
          todo.completed ? (
            <Task
              key={i}
              taskTitle={todo.title}
              id={todo.id}
              isComplete={todo.completed}
              handleDelete={() => handleDelete(todo.id)}
              handleEdit={() => handleEdit(todo.id)}
              toggleComplete={() => toggleComplete(todo.id)}
            />
          ) : (
            ''
          )
        )}
      </div>
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
      >
        clear list
      </button>
    </div>
  )
}

export default Container
