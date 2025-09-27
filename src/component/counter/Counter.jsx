import React from "react";
import bgImg from "../../assets/vector1.png";
import "./counter.css";

const Counter = ({ ticketData }) => {
  const inProgressData = ticketData.filter(
    (ticket) => ticket.status == "In-Progress"
  );

  const resolvedData = ticketData.filter(
    (ticket) => ticket.status == "Resolved"
  );

  return (
    <div className="flex flex-col md:flex-row p-4 gap-3 text-center">
      <div className="border-2 border-white flex-1 relative bg-gradient-to-r from-[#632ee3] to-[#9c62f2] rounded-2xl  flex    text-white">
        <div className="box-1 py-8 flex">
          {/* Content */}
          <div className="flex-1  flex flex-col items-center justify-center">
            <h2 className=" md:text-lg md:font-medium md:mb-2 ">In-Progress</h2>
            <p className="md:text-5xl font-bold relative z-10">
              {inProgressData.length}
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 border-white flex-1 relative bg-gradient-to-r from-[#54cf68] to-[#00827a] rounded-2xl  flex   text-white">
        <div className="box-1 py-8 flex">
          {/* Content */}
          <div className="flex-1  flex flex-col items-center justify-center">
            <h2 className=" md:text-lg md:font-medium md:mb-2 ">Resolved</h2>
            <p className="md:text-5xl font-bold relative z-10">
              {resolvedData.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
