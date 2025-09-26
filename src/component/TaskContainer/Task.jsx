import React from "react";

const Task = ({ task, handelComplete }) => {
  return (
    <div className="mt-3 rounded-2xl bg-white p-4 shadow-xl">
      <h1 className="text-xl font-semibold">{task.title}</h1>
      <button
        onClick={() => {
          handelComplete(task);
        }}
        className="mt-2 text-center rounded-2xl bg-[#02a53b] w-full text-white font-semibold py-2"
      >
        Complete
      </button>
    </div>
  );
};

export default Task;
