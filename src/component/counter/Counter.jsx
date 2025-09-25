import React from "react";
import bgImg from "../../assets/vector1.png";

const Counter = ({ ticketData }) => {
  const inProgressData = ticketData.filter(
    (ticket) => ticket.status == "In-Progress"
  );

  const resolvedData = ticketData.filter(
    (ticket) => ticket.status == "Resolved"
  );

  console.log(resolvedData);
  return (
    <div className="flex p-4 gap-3 text-center">
      <div className="border-2 border-white flex-1 relative bg-gradient-to-r from-[#632ee3] to-[#9c62f2] rounded-2xl  flex p-4 md:p-0  text-white ">
        {/* Background pattern image (vector1.png) */}
        <div className="flex-1 md:block hidden">
          <img
            src={bgImg}
            alt="background pattern"
            className=" object-contain "
          />
        </div>

        {/* Content */}
        <div className="flex-1  flex flex-col items-center justify-center">
          <h2 className=" md:text-lg md:font-medium md:mb-2 ">In-Progress</h2>
          <p className="md:text-5xl font-bold relative z-10">
            {inProgressData.length}
          </p>
        </div>
        <div className="md:block hidden flex-1 ">
          <img
            src={bgImg}
            alt="background pattern"
            className=" flex-1 rotate-y-180 object-cover "
          />
        </div>
      </div>

      <div className="border-2 border-white flex-1 relative bg-gradient-to-r from-[#54cf68] to-[#00827a] rounded-2xl  flex p-4 md:p-0  text-white ">
        {/* Background pattern image (vector1.png) */}
        <div className="flex-1 md:block hidden">
          <img
            src={bgImg}
            alt="background pattern"
            className=" object-contain "
          />
        </div>

        {/* Content */}
        <div className="flex-1  flex flex-col items-center justify-center">
          <h2 className=" md:text-lg md:font-medium md:mb-2 ">Resolve</h2>
          <p className="md:text-5xl font-bold relative z-10">
            {resolvedData.length}
          </p>
        </div>
        <div className="md:block hidden flex-1 ">
          <img
            src={bgImg}
            alt="background pattern"
            className=" flex-1 rotate-y-180 object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
