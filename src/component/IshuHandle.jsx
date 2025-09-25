import React, { useState } from "react";
import { Suspense } from "react";
import Counter from "./counter/Counter";
//import TicketContainer from "./component/TicketContainer/TicketContainer";
//import TaskContainer from "./component/TaskContainer/TaskContainer";
import TicketContainer from "./TicketContainer/TicketContainer";
import TaskContainer from "./TaskContainer/TaskContainer";

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
  };

  const handelComplete = (task) => {
    console.log("complete clicked", task);
    if (task.status == "In-Progress") {
      task.status = "Resolved";
    }
    const remainingData = ticketStatus.filter(
      (ticket) => ticket.id !== task.id
    );
    console.log(remainingData);
    setTicketStatus([...remainingData, task]);
  };
  return (
    <div>
      <Counter ticketData={ticketData}></Counter>

      <div className="grid grid-cols-3 gap-3">
        <div className="border-2 border-red-500 col-span-2">
          <Suspense>
            <TicketContainer
              handelCardClick={handelCardClick}
              ticketData={ticketData}
            ></TicketContainer>
          </Suspense>
        </div>
        <div className="border-2">
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
