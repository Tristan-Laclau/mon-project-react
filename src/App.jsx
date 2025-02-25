import React, { useState } from "react";
import TodoList from "./components/todoList";
import AddTodoForm from "./components/AddTodoForm";
import Counter from "./components/counter";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Apprendre React" },
    { id: 2, title: "Créer une ToDo List" },
    { id: 3, title: "Boire un café" }
  ]);

  const handleAddTask = (title) => {
    const newTask = { id: tasks.length + 1, title }; // Création de la nouvelle tâche
    setTasks([...tasks, newTask]); // Mise à jour de l’état avec la nouvelle tâche
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} onToggle={toggleTask} />

      <h2>Compteur</h2>
      <Counter/>
    </div>
  );
};

export default App;