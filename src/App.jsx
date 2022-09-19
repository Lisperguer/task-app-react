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

  function createTask(TaskTitle) {
    setTasks([
      ...tasks,
      {
        title: TaskTitle,
        id: tasks.length,
        description: "nueva tarea",
      },
    ]);
  }
  return (
    <div>
      <TaskForm createTask = {createTask}/>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
