import React, { useEffect, useState } from "react";
import TodoList from "./components/todoList";
import AddTodoForm from "./components/AddTodoForm";
import Counter from "./components/counter";
import axios from "axios";
import Demo from "./components/Demo";

const App = () => {
  const [tasks, setTasks] = useState([]);

  //Charger les tâches à l'initialisation du composant
  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Erreur de récupération des tâches :", error));
  }, []);

  //Ajouter une tâche
  const handleAddTask = (title) => {
    const newTask = { title, completed : false}; // Création de la nouvelle tâche
    axios
      .post("http://localhost:5000/tasks", newTask)
      .then((response) => setTasks([...tasks, response.data])) //Mise à jour de l'état
      .catch((error) => console.error("Erreur lors de l'ajout d'une tâche : ", error));
  };

  //Modifier l'état d'une tâche (complété ou non)
  const handleToggleTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = { ...task, completed: !task.completed };
    axios
      .put(`http://localhost:5000/tasks/${id}`, updatedTask)
      .then(() => setTasks(tasks.map((t) => (t.id === id ? updatedTask : t))))
      .catch((error) => console.error("Erreur lors de la mise à jour de la tâche : ", error));
  };

  const handleDeleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then((response)=> setTasks(tasks.filter((task)=> task.id != id)))
      .catch((error)=> console.error("Erreur lors de la suppression d'une tâche :", error));
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodoForm onAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />

      <h2>Compteur</h2>
      <Counter/>
      <Demo></Demo>
    </div>
  );
};

export default App;