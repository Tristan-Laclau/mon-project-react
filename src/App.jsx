import React, { useEffect, useState } from "react";
import TodoList from "./components/todoList";
import AddTodoForm from "./components/AddTodoForm";
import Counter from "./components/counter";
import axios from "axios";
import Demo from "./components/Demo";
import "./App.css";
import PriorityFilter from "./components/PriorityFilter";
import ThemeButton from "./components/ThemeButton";

const App = () => {

  //STATES
  const [tasks, setTasks] = useState([]);
  const [filterPriority, setFilterPriority] = useState("Toutes");
  const filteredTasks = filterPriority === "Toutes" ? tasks : tasks.filter(task => task.priority === filterPriority)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Récupérer le thème dans le local storage
  });
  
  //Passer d'un thème à l'autre
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Sauvegarde du thème
  };


  //Charger les tâches à l'initialisation du composant
  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Erreur de récupération des tâches :", error));
  }, []);

  //Ajouter une tâche
  const handleAddTask = (title, priority) => {
    const newTask = { title : title, completed : false, priority : priority};

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
      .then(()=> setTasks(tasks.filter((task)=> task.id != id)))
      .catch((error)=> console.error("Erreur lors de la suppression d'une tâche :", error));
  }

  //Charger les tâches lorsque la priorité change
  const handleFilterChange = (e) => {
    setFilterPriority(e.target.value);
  }

  return (
    <div className= {`app ${theme}`}> {/* La classe change dynamiquement selon la valeur de "theme"*/}
      <h1>ToDo List</h1>

      <div>
        <h2>Tâches restantes : {tasks.filter(task => !task.completed).length}</h2>
        <ThemeButton theme={theme} toggleTheme={toggleTheme}/>
      </div>

      <PriorityFilter filterPriority={filterPriority} onPriorityChange={handleFilterChange}/>

      <AddTodoForm onAddTask={handleAddTask} />
      <TodoList
        tasks={filteredTasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;