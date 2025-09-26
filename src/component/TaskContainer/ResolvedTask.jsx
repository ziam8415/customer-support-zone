import React from "react";

const ResolvedTask = ({ data }) => {
  return (
    <div className="mt-3 p-3 rounded-2xl bg-[#e0e7ff] shadow-xl">
      <h1 className="text-xl font-semibold">{data.title}</h1>
    </div>
  );
};

export default ResolvedTask;
