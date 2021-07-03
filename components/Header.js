import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoMenu, IoCallSharp } from "react-icons/io5";
import ReactCSSTransitionGroup from "react-transition-group";
import { Menu, Transition } from "@headlessui/react";

const navigation = [
  { name: "Home", ref: "/" },
  { name: "About", ref: "/about" },
  { name: "Menu", ref: "/menu" },
  { name: "Contact", ref: "/contact" },
  // { name: "Pick Up", ref: "/pickup" },
  // { name: "Delivery", ref: "/delivery" },
  { name: "NEW Buffet", ref: "/buffet" },
];

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div
        className="h-20 flex-row flex items-center justify-between"
        style={{ backgroundColor: "#10161C" }}
      >
        <Link href="/">
          <a>
            <h1 className="md:text-5xl text-logo font-bold lg:ml-10 ml-5 text-2xl font-bubblegum">
              Pure Spice
            </h1>
          </a>
        </Link>
        <div className="hidden md:block lg:mr-10 mr-5">
          {navigation.map((item, index) => (
            <Link href={item.ref} key={index}>
              <a className="text-white xl:text-xl lg:text-lg text-md lg:mx-5 mx-3 border-transparent hover:text-red-800 border-b-2 pb-1 font-changa">
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <div className="mr-3 flex flex-row items-center md:hidden">
          <input
            type="button"
            value="Order Now"
            className="md:w-32 md:h-10 w-28 h-8 font-semibold text-md bg-transparent border-2 text-white border-gold hover:border-gold-dark hover:bg-gold-dark font-changa mr-5"
            // style={{ borderColor: "#A88544" }}
          />
          <IoMenu
            size={30}
            color="white"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        </div>
      </div>
      {/* <Transition
        show={toggleMenu}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      > */}
      <div
        className="w-screen absolute z-50 opacity-95"
        style={{ backgroundColor: "#272d32" }}
      >
        {toggleMenu && (
          <div className="flex flex-col">
            {navigation.map((item, index) => (
              <div key={index}>
                <div className="p-5">
                  <Link href={item.ref}>
                    <a className="text-white font-changa text-xl font-medium">
                      {item.name}
                    </a>
                  </Link>
                </div>
                {index != navigation.length - 1 && <hr />}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* </Transition> */}
    </>
  );
};

export default Header;
