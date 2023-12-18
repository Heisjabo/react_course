import TaskItem from "./TaskItem";

const TasksList = ({tasks, toggleTask, deleteTask}) => {
    return (
        <div className="tasks">
        <h2>Tasks List</h2>
        <ul>
          {tasks.map((task) => {
            return (
              <TaskItem task={task} key={task.id} toggleTask={toggleTask} deleteTask={deleteTask}/>
            );
          })}
        </ul>
      </div>
    )
}

export default TasksList;