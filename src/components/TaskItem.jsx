const TaskItem = ({task, toggleTask, deleteTask}) => {
    return (
        <li key={task.id}>
                <label htmlFor="task">
                  <input
                    type="checkbox"
                    id="completed"
                    checked={task.completed}
                    onChange={(e) => toggleTask(task.id, e.target.checked)}
                  />
                  {task.title}
                </label>
                <button onClick={() => deleteTask(task.id)}>x</button>
        </li>
    )
}

export default TaskItem