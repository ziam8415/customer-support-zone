import React from "react";
import Task from "./task";

const TaskStatus = ({ ticketStatus, handelComplete }) => {
  const taskStatusData = ticketStatus.filter(
    (ticket) => ticket.status == "In-Progress"
  );
  //console.log(taskStatusData);

  return taskStatusData.map((task) => (
    <Task key={task.id} handelComplete={handelComplete} task={task}></Task>
  ));
};

export default TaskStatus;
