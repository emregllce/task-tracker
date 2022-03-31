import Duty from "./Duty";

const Tasks = ({ tasks, deleteTask, toggleDone, deleteAll, showId}) => {
  
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Duty duty={task} deleteTask={deleteTask} toggleDone={toggleDone} />
      ))}
      <button className="btn del" onClick = {deleteAll}>DELETE ALL</button>
      <button className="btn id" onClick={showId}>Show Id</button>
      
    </div>
  );
};

export default Tasks;
