import React from "react";

const Task = ({ task, handelComplete }) => {
  return (
    <div className="mt-3 p-1 border-2 border-green-400">
      <h1>{task.title}</h1>
      <button
        onClick={() => {
          handelComplete(task);
        }}
        className="btn"
      >
        Complete
      </button>
    </div>
  );
};

export default Task;
