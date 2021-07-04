import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import curry from "../assets/curry.jpg";
import Head from "next/head";
import { MenuItems } from "../MenuItems";

const MenuSlider = ({ data }) => {
  return (
    <>
      <div
        className="text-white px-5 font-changa absolute right-0 h-auto min-h-screen top-0 bg-white lg:w-2/3 md:w-3/4"
        style={{ backgroundColor: "#10161C" }}
      >
        <hr className="w-1/2 mx-auto mt-3 border-gold" />
        <h1 className="text-3xl uppercase font-changa lg:text-4xl text-center mt-2">
          {data.name}
        </h1>
        <hr className="w-2/3 mx-auto mt-2 border-gold mb-10" />
        {data.items.map((food, index) => (
          <div className="pb-5" key={index}>
            <h1 className="font-semibold lg:text-lg">{food.food}</h1>
            <h1 className="font-extralight lg:text-md">{food.desc}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

const menu = () => {
  return (
    <div>
      <Head>
        <title>Menu - Pure Spice</title>
        <meta name="description" content="Pure Spice Restuarant Menu" />
        <link rel="icon" href="/spice.png" />
      </Head>
      <Header />
      <div className="relative pb-1 md:pb-0 hidden md:block">
        {/* <div className="min-w-full h-1/2">
          <Image
            src={curry}
            className="opacity-60"
            priority={true}
            height={1500}
          />
        </div> */}
        <div className="backgroundImageMenu h-screen opacity-60"></div>
        {/* <div className="bg-red-900 h-full top-0 left-0 absolute w-full"></div> */}

        <div
          className="w-3/4 absolute h-full top-0 right-0"
          style={{ backgroundColor: "#10161C" }}
        >
          <div className="text-white">
            <hr className="w-1/2  mx-auto mt-10 border-gold" />
            <h1 className="text-4xl uppercase font-changa lg:text-5xl text-center mt-4">
              Dining Menu
            </h1>
            <hr className="w-2/3 mx-auto mt-4 border-gold" />
            <p className="text-center mt-2 text-xl text-gold">
              All specialty dishes are served with rice, roti and papadam.
            </p>
          </div>
          <div className="mt-3">
            {MenuItems.map((item, index) => {
              const [showMenu, setShowMenu] = useState(false);
              const [blur, setBlur] = useState(false);

              return (
                <div key={index}>
                  {blur && (
                    <a
                      onClick={() => {
                        setShowMenu(!showMenu);
                        setBlur(!blur);
                      }}
                    >
                      <div
                        className="h-full top-0 left-0 absolute w-full min backdrop-filter"
                        style={{ "--tw-backdrop-blur": "blur(1px)" }}
                      />
                    </a>
                  )}

                  <a
                    onClick={() => {
                      setShowMenu(!showMenu);
                      setBlur(!blur);
                    }}
                  >
                    <div
                      className="p-5 mt-2 mx-5"
                      style={{ backgroundColor: "#19232c" }}
                    >
                      <h1 className="text-xl text-white font-changa">
                        {item.name}
                      </h1>
                    </div>
                  </a>
                  {showMenu && <MenuSlider data={item} index={index} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-3 md:hidden">
        {MenuItems.map((item, index) => {
          const [showMenu, setShowMenu] = useState(false);
          return (
            <div key={index}>
              <a onClick={() => setShowMenu(!showMenu)}>
                <div
                  className="p-5 mt-2"
                  style={{ backgroundColor: "#10161C" }}
                >
                  <h1 className="text-xl text-white font-changa">
                    {item.name}
                  </h1>
                </div>
              </a>
              {showMenu && (
                <div
                  className="text-white px-5 font-changa"
                  style={{ backgroundColor: "#10161C" }}
                >
                  {item.items.map((food, index) => (
                    <div className="pb-5" key={index}>
                      <h1 className="font-semibold">{food.food}</h1>
                      <h1 className="font-extralight">{food.desc}</h1>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default menu;
