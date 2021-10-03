import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
import InfoButtons from "../Components/restaurant/InfoButtons";
import TabContainer from "../Components/restaurant/Tabs";

const RestaurantLayout = (props) => {
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
        <RestaurantInfo
          name="Shree Gurukripa"
          restaurantRating="3.5"
          deliveryRating="3.2"
          cuisine="North Indian"
          address="Sarwate Bus Stand, Indore"
        />

        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <TabContainer></TabContainer>
        </div>
        <div className="relative">{props.children}</div>
      </div>
    </>
  );
};
export default RestaurantLayout;
