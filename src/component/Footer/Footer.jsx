import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-around gap-3 text-center md:text-left max-w-[1200px] mx-auto py-10 border-b-1 border-gray-400 p-2">
        <div className="md:w-[300px]">
          <h1 className="text-2xl font-semibold">CS — Ticket System</h1>
          <p className="pt-4 text-{#a1a1aa]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">Company</h1>
          <div className="pt-4 text-{#a1a1aa] space-y-3">
            <p>About Us</p>
            <p>Our Mission</p>
            <p>Contact Saled</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">Services</h1>
          <div className="pt-4 text-{#a1a1aa] space-y-3">
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">Information</h1>
          <div className="pt-4 text-{#a1a1aa] space-y-3">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Join Us</p>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
