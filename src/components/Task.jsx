import React from "react";

const Task = (props) => {
  const { task } = props;

  return (
    <div style={{textDecoration: task.completed ? 'line-through 3px' : ''}}>
      <h3>{task.description}</h3>
    </div>
  );
};

export default Task;

