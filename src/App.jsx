import "./App.css";
import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TasksList from "./components/TasksList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";
import Shared from "./components/Shared";

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

  const posts = [
    {
        id: "1",
        title: 'post 1',
        description: 'post description 1'
    },
    {
        id: "2",
        title: 'post 2',
        description: 'post description 2'
    },
    {
        id: "3",
        title: 'post 3',
        description: 'post description 3'
    }
];

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Shared />}>
          <Route index element={<h1>Home</h1>}></Route>
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
        </Route>

        <Route path="/posts" element={<Shared posts={posts}/>}>
        <Route path="/posts/:id" element={<SinglePost posts={posts} />}></Route>
        </Route>
        <Route path="*" element={<h1>Not found</h1>}></Route>

      </Routes>
    </BrowserRouter>
    // <div>
    //   <h1>Task Tracker</h1>
    //   <AddTaskForm handleSubmit={handleSubmit} title={title} setTitle={setTitle}/>
    //   <TasksList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>
    // </div>
  );
};

export default App;
