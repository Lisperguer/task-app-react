import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as data } from "./tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  // const tasks = []

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div>
      <TaskForm />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
