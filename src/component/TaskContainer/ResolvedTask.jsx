import React from "react";

const ResolvedTask = ({ data }) => {
  return (
    <div className="mt-3 p-1 border-2">
      <h1 className="">{data.title}</h1>
    </div>
  );
};

export default ResolvedTask;
