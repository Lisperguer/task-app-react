import React from "react";
import { tasks as data } from "./tasks";
import { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  // const tasks = []

  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h1> no hay tareas aun</h1>;
  }
  return (
    <div>
      {tasks.map((tasks) => (
        <div key={tasks.id}>
          <h1>{tasks.title}</h1>
          <p>{tasks.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
