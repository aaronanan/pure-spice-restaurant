import React from "react";
import Image from "next/image";
import Spyce from "../assets/logo.png";

const TopBar = () => {
  return (
    <div className="h-10 bg-white text-black flex flex-row justify-center items-center">
      <h1 className="text-xl font-changa uppercase mr-5 font-semibold">
        Order Pick Up Or
      </h1>
      <a className="pt-2" href="https://www.spyce.ca/">
        <Image src={Spyce} width={100} height={30} priority={true} />
      </a>
    </div>
  );
};

export default TopBar;
