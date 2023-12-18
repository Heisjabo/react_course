import "./App.css";
import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TasksList from "./components/TasksList";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("tasks");
    if(localValue) {
      return JSON.parse(localValue);
    } else{
      return [];
    }
  });
  const [title, setTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      alert("Please enter a title");
      return null;
    }
    setTasks([...tasks, { id: crypto.randomUUID(), title, completed: false }]);
    setTitle("");
  };

  const toggleTask = (id, completed) => {
    setTasks(tasks.map(task => {
      if(task.id === id){
        return {...task, completed: completed}
      }
      return task;
    }))
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div>
      <h1>Task Tracker</h1>
      <AddTaskForm handleSubmit={handleSubmit} title={title} setTitle={setTitle}/>
      <TasksList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>
    </div>
  );
};

export default App;
