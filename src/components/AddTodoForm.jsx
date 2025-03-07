import React, { useState } from "react";

const AddTodoForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Moyenne"); // Priorité par défaut


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title, priority);
      setTitle("");
      setPriority("Moyenne");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ajouter une tâche"
      />

    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Basse">Basse</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Haute">Haute</option>
    </select>
        

      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddTodoForm;