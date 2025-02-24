import React, { useState, useEffect } from 'react';
import { getTasks, addTask, deleteTask, updateTask } from './services/todoService';
import TodoList from './components/todoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Charger les tâches au montage
  useEffect(() => {
    getTasks().then(response => setTasks(response.data));
    console.log(tasks);
  }, []);

  // Ajouter une tâche
  const handleAddTask = (title) => {
    const newTask = { title, completed: false };
    addTask(newTask).then(response => setTasks([...tasks, response.data]));
  };

  // Supprimer une tâche
  const handleDeleteTask = (id) => {
    deleteTask(id).then(() => setTasks(tasks.filter(task => task.id !== id)));
  };

  // Basculer l'état d'une tâche (complété/incomplet)
  const handleToggleTask = (id) => {
    const task = tasks.find(task => task.id === id);
    const updatedTask = { ...task, completed: !task.completed };
    updateTask(id, updatedTask).then(() =>
      setTasks(tasks.map(t => (t.id === id ? updatedTask : t)))
    );
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <AddTodoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
    </div>
  );
};

export default App;
