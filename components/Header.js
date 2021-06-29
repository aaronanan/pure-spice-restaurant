import React from "react";
import Link from "next/link";

const navigation = [
  { name: "Home", ref: "/" },
  { name: "About", ref: "/about" },
  { name: "Menu", ref: "/menu" },
  { name: "Contact", ref: "/contact" },
  { name: "Pick Up", ref: "/pickup" },
  { name: "Delivery", ref: "/delivery" },
  { name: "NEW Buffet", ref: "/buffet" },
];

const Header = () => {
  return (
    <div
      className="h-20 flex-row flex items-center justify-between rounded-b-lg"
      style={{ backgroundColor: "#10161C" }}
    >
      <h1 className="md:text-5xl text-logo font-bold lg:ml-10 ml-5 text-2xl font-bubblegum">
        Pure Spice
      </h1>
      <div className="hidden md:block lg:mr-10 mr-5">
        {navigation.map((item, index) => (
          <Link href={item.ref} key={index}>
            <a className="text-white xl:text-xl lg:text-lg text-md lg:mx-5 mx-3 border-transparent hover:text-red-800 border-b-2 pb-1 font-changa">
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
