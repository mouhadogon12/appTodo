import { useState } from 'react'

import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if(task.trim() !== ""){
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((t,i)=> i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">

      <div className="todo-card">

        <h1>Todo App</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Ajouter une tâche..."
            value={task}
            onChange={(e)=>setTask(e.target.value)}
          />

          <button onClick={addTask}>
            Ajouter
          </button>
        </div>

        <ul className="task-list">
          {tasks.map((t,index)=>(
            <li key={index} className="task-item">

              <span>{t}</span>

              <button
                className="delete-btn"
                onClick={()=>deleteTask(index)}
              >
                Supprimer
              </button>

            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default App
