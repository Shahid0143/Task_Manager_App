import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";


function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const selectTask = (task) => {
    setSelectedTask(task);
  };

  return (
    <div style={{textAlign:"center"}}>
     
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onSelectTask={selectTask} />
      {selectedTask && <TaskDetails task={selectedTask} />}
      
    </div>
  );
}

export default App;
