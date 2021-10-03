import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";
import FoodItem from "../../Components/restaurant/Order-Online/FoodItem";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full flex">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-300 h-screen w-1/4">
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full md:w-3/4">
          <h2 className="text-xl font-semibold">Order Online</h2>
          <h4 className="flex items-center gap-2 font-light text-gray-500">
            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45min
          </h4>
          <section>
            <FoodItem
              image="https://b.zmtcdn.com/data/dish_photos/bc8/8ad371f3c0c0451f30de9184ac211bc8.jpg?fit=around|130:130&crop=130:130;*,*"
              price="226"
              rating={3}
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt laborum esse alias ipsam culpa aliquam dicta! Delectus, voluptate illo? Vero voluptate veniam autem debitis illum, ipsam ducimus expedita labore amet."
                title="Shahi Paneer"
            />
          </section>
        </div>
        <FloatMenuBtn />
      </div>
    </>
  );
};

export default OrderOnline;
