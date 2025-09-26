import React from "react";
import TaskStatus from "./TaskStatus";
import ResolvedTask from "./ResolvedTask";

const TaskContainer = ({ ticketStatus, handelComplete }) => {
  const resolvedData = ticketStatus.filter(
    (ticket) => ticket.status == "Resolved"
  );

  return (
    <div>
      <h1 className="text-2xl font-bold">Task Status</h1>
      <TaskStatus
        handelComplete={handelComplete}
        ticketStatus={ticketStatus}
      ></TaskStatus>
      <h1 className="text-2xl font-bold pt-5">Resolved Task</h1>
      {resolvedData.map((data) => (
        <ResolvedTask data={data}></ResolvedTask>
      ))}
    </div>
  );
};

export default TaskContainer;
