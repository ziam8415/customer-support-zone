import React from "react";

const Card = ({ ticket, handelCardClick }) => {
  //console.log(ticket.ticket.status);
  return (
    <div
      onClick={() => {
        handelCardClick(ticket);
      }}
      className="p-3 border-2 m-3"
    >
      <div className="flex justify-between">
        <h1>{ticket.title}</h1>
        <p className="text-red-500">{ticket.status}</p>
      </div>
      <p>{ticket.description}</p>
      <div className="flex justify-between">
        <div className="flex">
          <h3 className="pr-3">
            # <span>{ticket.id}</span>
          </h3>
          <h3>{ticket.priority}</h3>
        </div>
        <div className="flex">
          <h3 className="pr-3">{ticket.customer}</h3>
          <h3>{ticket.createdAt}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
