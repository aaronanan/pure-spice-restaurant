import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import curry from "../assets/curry.jpg";
import Head from "next/head";

const menuItems = [
  {
    name: "Appetizers",
    items: [
      {
        food: "Vegetable Pakoras",
        desc: "They are an addictive, aromatic, crunchy and a delicious snack that is served with a medium spicy sauce",
      },
      {
        food: "Vegetable Samosa",
        desc: "A South Asian fried pastry with a savory filling like spiced potatoes, onions, peas, lentils",
      },
      {
        food: "Beef Samosa",
        desc: "A South Asian fried pastry with a savory filling like spiced potatoes, onions, peas, lentils, and beef",
      },
      {
        food: "Lamb Samosa",
        desc: "A South Asian fried pastry with a savory filling like spiced potatoes, onions, peas, lentils, and lamb",
      },
      {
        food: "Chicken Wings",
        desc: "A chicken wing prepared in a Sri Lankan style that has a unique spice, crisp, and flavour",
      },
      {
        food: "Fish Pakoras",
        desc: "They a fried crunchy fish snack that is served with a medium spicy saucee",
      },
      {
        food: "Butter Chicken Poutine",
        desc: "Poutine made with butter chicken and its creamy sauce on french-fried potatoes with fresh cheese curds",
      },
    ],
  },
  {
    name: "Vegetable Specialties",
    items: [
      {
        food: "Chickpea",
        desc: "Chickpea curry is a tantalizing balance of spicy, tangy, and sweet",
      },
      {
        food: "Spinach Cheese",
        desc: "Commonly known as Palak Paneer, it is a rich and creamy, made from spinach and the paneer cheese",
      },
      {
        food: "Eggplant",
        desc: "Eggplant offer a mild flavor with sweet notes and a creamy texture",
      },
      {
        food: "Butter Mixed Vegetables",
        desc: "Butter mixed vegetables has a mildly sweet flavor resulting from the spiced tomato, butter, and cream sauce",
      },
      {
        food: "Mixed Vegetable Kurma",
        desc: "Mixed vegetable korma has pleasant aroma and spice due to its buttermilk or yogurt base",
      },
      {
        food: "Mixed Vegetable Curry",
        desc: "Mixed vegetable curry has a addictive and aromatic flavor from its coconut milk base",
      },
      {
        food: "Green Peas & Cheese",
        desc: "Commonly known as Matar Paneer, it is rich and creamy, made from peas and the creamy paneer",
      },
      {
        food: "Cauliflower Potato",
        desc: "Commonly known as Aloo Gobi, it has a unique texture that is packed with flavors",
      },
      {
        food: "Butter Paneer",
        desc: "Commonly known as Paneer Makhani, it has extremely smooth texture from the tomato, butter and cream base paired with paneer cheese",
      },
    ],
  },
  { name: "Chicken Specialties", items: [] },
  {
    name: "Beef Specialties",
    items: [
      {
        food: "Beef Curry",
        desc: "Beef curry has a addictive and aromatic flavor from its coconut milk base",
      },
      {
        food: "Beef Kurma",
        desc: "Beef korma has pleasant aroma and spice due to its buttermilk or yogurt base",
      },
      {
        food: "Beef Spinach",
        desc: "Commonly known as Palak Beef, this dish is a delicous curry that rythmically combines both beef and spinach ",
      },
    ],
  },
  { name: "Lamb Specialties", items: [] },
  { name: "Seafood Specialties", items: [] },
  { name: "Side Orders", items: [] },
  { name: "Desserts", items: [] },
];

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
            {menuItems.map((item, index) => {
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
        {menuItems.map((item, index) => {
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
