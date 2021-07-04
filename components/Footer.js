import React from "react";
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="md:h-28 h-36 bg-white flex flex-row justify-between items-center md:px-10 px-2 flex-wrap bottom-0 -mt-1">
      <div className="mx-auto md:mx-0">
        <h1 className="md:text-5xl text-logo font-bold text-2xl font-bubblegum">
          Pure Spice
        </h1>
        <h2 className="md:text-2xl text-md text-logo font-bold font-bubblegum">
          Sri Lankan & South Indian Cuisine
        </h2>
      </div>
      <div className="text-gold font-changa font-medium md:text-2xl text-md">
        <div className="flex flex-row items-center">
          <IoLocationSharp className="text-gold mr-5" />
          <h1>Quesnel, 252 Reid Street</h1>
        </div>
        <div className="flex flex-row items-center">
          <IoCallSharp className="text-gold mr-5" />
          <h1>(236) 424-1111</h1>
        </div>
      </div>
      <h4 className="font-changa font-medium md:text-xl text-sm">
        Designed by New Eyes
      </h4>
    </footer>
  );
};

export default Footer;
