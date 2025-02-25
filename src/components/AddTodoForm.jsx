import React, { useState } from "react";

const AddTodoForm = ({ onAddTask }) => {
  const [title, setTitle] = useState(""); // État du champ input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return; // On vérifie qu'on n'ajoute pas une tâche vide

    onAddTask(title); // On remonte la tâche à App.jsx
    setTitle(""); // On réinitialise le champ après l'ajout
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddTodoForm;