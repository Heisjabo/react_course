import React from 'react'

const AddTaskForm = ({handleSubmit, title, setTitle}) => {
  return (
    <form onSubmit={handleSubmit}>
        <label>New Task</label>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add Task</button>
      </form>
  )
}


export default AddTaskForm