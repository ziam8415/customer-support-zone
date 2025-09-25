import React from "react";

const Navbar = () => {
  return (
    // <div className="flex justify-between items-center">
    //   <h1></h1>
    //   <div className="flex justify-between items-center gap-4 flex-wrap">

    //
    //   </div>
    // </div>

    <div className="navbar bg-white flex flex-col md:flex-row ">
      <div className="flex-1 ">
        <a className="btn btn-ghost text-xl">CS — Ticket System</a>
      </div>
      <div className="flex flex-1 justify-center items-center gap-4 flex-wrap ">
        <p>Home</p>
        <p>FAQ</p>
        <p>Changelog</p>
        <p>Blog</p>
        <p>Download</p>
        <p>Contact</p>
        <button className="btn"> + New Ticket</button>
      </div>
    </div>
  );
};

export default Navbar;
