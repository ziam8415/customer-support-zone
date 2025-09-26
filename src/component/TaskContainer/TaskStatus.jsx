import React from "react";
import Task from "./task";

const TaskStatus = ({ ticketStatus, handelComplete }) => {
  const taskStatusData = ticketStatus.filter(
    (ticket) => ticket.status == "In-Progress"
  );

  //console.log(length);

  return (
    <>
      {taskStatusData.length == 0 ? (
        <h1 className="text-[#627382] text-xl pt-3">
          Select a ticket to add to Task Status
        </h1>
      ) : (
        taskStatusData.map((task) => (
          <Task
            key={task.id}
            handelComplete={handelComplete}
            task={task}
          ></Task>
        ))
      )}
    </>
  );
};

export default TaskStatus;
