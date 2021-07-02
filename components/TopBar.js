import React from "react";
import Image from "next/image";
import Spyce from "../assets/logo.png";

const TopBar = () => {
  return (
    <div className="h-14 bg-black text-white flex flex-row justify-center items-center">
      <h1 className="text-xl font-changa uppercase mr-5">Order Pick Up Or</h1>
      <Image src={Spyce} width={120} height={40} />
    </div>
  );
};

export default TopBar;
