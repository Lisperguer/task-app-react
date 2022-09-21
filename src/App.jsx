import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  // const tasks = []

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(Task) {
    setTasks([
      ...tasks,
      {
        title: Task.title,
        id: tasks.length,
        description: Task.description,
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
