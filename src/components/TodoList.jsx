import React from "react";
import Task from "./Task";

const TodoList = ({ tasks, onToggle}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default TodoList;