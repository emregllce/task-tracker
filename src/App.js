  import { useState,useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);
  const [id, setId] = useState("")

  useEffect(() => {
    // console.log("emre");
    idSet()
  }, [tasks.length]);

  const [showAddTask, setShowAddTask] = useState(false);

  // DELETE TASK
  const deleteTask = (deletedTaskId) => {
    // console.log("delete Task", deletedTaskId);
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  // ADD TASK
  const addTask = (newTask) => {
    // const id = Math.floor(Math.random() * 1000 + 1);
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  const idSet = () => {
    setId(tasks.map((task) => task.id = tasks.indexOf(task)+1))
  }
  // TOGGLE DONE
  const toggleDone = (toggleDoneId) => {
    // console.log("double click", toggleDoneId);
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // TOGGLESHOW
  const toggleShow = () => setShowAddTask(!showAddTask);


  // DELETE ALL
  const deleteAll = () => {
    setTasks([])
  }

  // SHOW ID'S OF TASKS
  const showId = () => {
   const idList =  tasks.map((task)=>task.id);
   console.log(idList);
  }
  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />

      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? (
        <Tasks
        tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} deleteAll = {deleteAll} showId = {showId}/>
      ) : (
        <h2 style={{ textAlign: "center" }}>NO TASK TO SHOW</h2>
      )}
    </div>
  );
}

export default App;
