import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white flex justify-between flex-col md:flex-row ">
      <div className=" ">
        <a className=" text-2xl font-bold">CS — Ticket System</a>
      </div>
      <div className="flex  justify-center items-center gap-4 text-gray-700 flex-wrap ">
        <p>Home</p>
        <p>FAQ</p>
        <p>Changelog</p>
        <p>Blog</p>
        <p>Download</p>
        <p>Contact</p>
        <button className="bg-gradient-to-r from-[#632ee3] to-[#9c62f2] px-4 py-2 rounded-2xl text-white text-xl font-semibold">
          {" "}
          + New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
