import React from "react";
import { FaCircle } from "react-icons/fa";

const Card = ({ ticket, handelCardClick }) => {
  //console.log(ticket.ticket.status);
  return (
    <div
      onClick={() => {
        handelCardClick(ticket);
      }}
      className="p-3 bg-white m-3 rounded-lg shadow-2xs"
    >
      <div className="flex justify-between">
        <h1 className=" font-semibold">{ticket.title}</h1>
        <p
          className={`flex items-center gap-1 px-2 py-1 rounded-2xl ${
            ticket.status == "Open"
              ? "bg-[#b9f8cf] text-[#0b5e06]"
              : "bg-[#f8f3b9] text-[#9c7700]"
          }`}
        >
          <span>
            <FaCircle />
          </span>
          <span className="text-xs">{ticket.status}</span>
        </p>
      </div>
      <p className="text-[#627382] text-xs py-1.5">{ticket.description}</p>
      <div className="flex justify-between text-[#627382] text-xs">
        <div className="flex">
          <h3 className="pr-3">
            # <span>{ticket.id}</span>
          </h3>
          <h3
            className={`${
              ticket.priority == "High"
                ? "text-[#f83044]"
                : ticket.priority == "Medium"
                ? "text-[#febb0c]"
                : "text-[#02a53b]"
            }`}
          >
            {ticket.priority} priority
          </h3>
        </div>
        <div className="flex">
          <h3 className="pr-2">{ticket.customer}</h3>
          <h3>{ticket.createdAt}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
