import React from 'react';
import Task from './task';

const TodoList = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
          onToggle={() => onToggleTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
