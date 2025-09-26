import React, { useState } from "react";
import { Suspense } from "react";
import Counter from "./counter/Counter";
//import TicketContainer from "./component/TicketContainer/TicketContainer";
//import TaskContainer from "./component/TaskContainer/TaskContainer";
import TicketContainer from "./TicketContainer/TicketContainer";
import TaskContainer from "./TaskContainer/TaskContainer";
import { toast } from "react-toastify";

const IshuHandle = ({ ticketData }) => {
  const [ticketStatus, setTicketStatus] = useState(ticketData);
  //console.log(ticketStatus);
  const handelCardClick = (card) => {
    if (card.status == "Open") {
      card.status = "In-Progress";
    }
    //console.log("card clicked", card);
    const remainingData = ticketStatus.filter(
      (ticket) => ticket.id !== card.id
    );
    //console.log(remainingData);
    setTicketStatus([...remainingData, card]);
    toast("Task Added");
  };

  const handelComplete = (task) => {
    //console.log("complete clicked", task);
    if (task.status == "In-Progress") {
      task.status = "Resolved";
    }
    const remainingData = ticketStatus.filter(
      (ticket) => ticket.id !== task.id
    );
    //console.log(remainingData);
    setTicketStatus([...remainingData, task]);
    toast("Task Resolved");
  };
  return (
    <div>
      <Counter ticketData={ticketData}></Counter>

      <div className="md:grid grid-cols-3 gap-3 pt-10 pb-10 px-3 md:px-0">
        <div className="col-span-2">
          <h1 className="text-2xl font-bold pl-2">Customer Tickets</h1>
          <Suspense>
            <TicketContainer
              handelCardClick={handelCardClick}
              ticketData={ticketData}
            ></TicketContainer>
          </Suspense>
        </div>
        <div className="">
          <TaskContainer
            handelComplete={handelComplete}
            ticketStatus={ticketStatus}
          ></TaskContainer>
        </div>
      </div>
    </div>
  );
};

export default IshuHandle;
