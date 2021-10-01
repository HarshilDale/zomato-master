import React from "react";

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";

const RestaurantLayout = () => {
  return (
    <>
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20">
        <ImageGrid
          images={[
            "https://b.zmtcdn.com/data/pictures/chains/5/1400365/6c9dec67b9122ff3e2ffd1225e7ee938.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/5/1400365/6c9dec67b9122ff3e2ffd1225e7ee938.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/5/1400365/6c9dec67b9122ff3e2ffd1225e7ee938.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          
            "https://b.zmtcdn.com/data/pictures/chains/5/1400365/6c9dec67b9122ff3e2ffd1225e7ee938.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/5/1400365/6c9dec67b9122ff3e2ffd1225e7ee938.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ]}
        />
      </div>
    </>
  );
};
export default RestaurantLayout;
