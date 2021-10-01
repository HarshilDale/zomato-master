import React, { useState } from "react";

// components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/9/1401979/133a4b906f9704eb6122caab14f96064_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Shree Gurukripa",
      cuisine: ["Street Food", "Beverages", "Tea"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/9/1401979/133a4b906f9704eb6122caab14f96064_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Shree Gurukripa",
      cuisine: ["Street Food", "Beverages", "Tea"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/9/1401979/133a4b906f9704eb6122caab14f96064_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Shree Gurukripa",
      cuisine: ["Street Food", "Beverages", "Tea"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
  ]);
  return (
    <>
      <DeliveryCarousal />
      {/* <Brand /> */}
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in Vijay Nagar
      </h1>
      <div className="flex justify-between flex-wrap">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            {...restaurant}
            key={restaurant._id}
            whereIsthisres="asf"
          />
        ))}
      </div>
    </>
  );
};

export default Delivery;
