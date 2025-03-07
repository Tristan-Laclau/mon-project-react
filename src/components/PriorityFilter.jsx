import React from "react";

const PriorityFilter = ({ filterPriority, onPriorityChange }) => {
  return (
    <select value={filterPriority} onChange={onPriorityChange}>
      <option value="Toutes">Toutes</option>
      <option value="Basse">Basse</option>
      <option value="Moyenne">Moyenne</option>
      <option value="Haute">Haute</option>
    </select>
  );
};

export default PriorityFilter;