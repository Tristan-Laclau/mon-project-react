import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <li>
      <span
        className={task.completed ? 'completed' : ''}
        onClick={onToggle}
      >
        {task.title}
      </span>
      <button onClick={onDelete}>Supprimer</button>
    </li>
  );
};

export default Task;
