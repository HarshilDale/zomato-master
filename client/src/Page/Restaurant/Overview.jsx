import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

// components
import MenuCollection from "../../Components/restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../Components/restaurant/MenuSimilarRestaurantcard";
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import Mapview from "../../Components/restaurant/Mapview";

import { getImage } from "../../Redux/Reducer/Image/Image.action";

const Overview = () => {
  const [menuImage, setMenuImages] = useState({ images: [] });
  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImage)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setMenuImages(images);
      });
    }
  }, []);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  console.log(
    reduxState?.mapLocation?.split(",").map((item) => parseFloat(item))
  );

  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menus
                <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection menuTitle="Menu" pages="3" image={menuImage} />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {reduxState?.cuisine.map((data) => (
              <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                {data}
              </span>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-medium">Average Cost</h4>
            <div className="my-4">
              <h6>₹{reduxState?.averageCost} for two people (approx.)</h6>
              <small className="text-gray-500">
                Exclusive of applicable taxes and charges, if any
              </small>
            </div>
            <div className="my-4">
              <h4 className="text-lg font-medium">Similar Restaurants</h4>
              <Slider {...settings}>
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/4/1400424/e4c2a01ebc9303eba08febd2fe9a7d94_featured_v2.jpg"
                  title="Shree Leela"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/4/1400424/e4c2a01ebc9303eba08febd2fe9a7d94_featured_v2.jpg"
                  title="Shree Leela"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/4/1400424/e4c2a01ebc9303eba08febd2fe9a7d94_featured_v2.jpg"
                  title="Shree Leela"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/4/1400424/e4c2a01ebc9303eba08febd2fe9a7d94_featured_v2.jpg"
                  title="Shree Leela"
                />
              </Slider>
            </div>
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div className="my-4 w-full md:hidden flex flex-col gap-4">
            <Mapview
              title={reduxState?.name}
              phno={`+91${reduxState?.contactNumber}`}
              mapLocation={getLatLong(reduxState?.mapLocation)}
              address={reduxState?.address}
            />
          </div>
          <div className="my-4 flex flex-col gap-4">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 shadow-md flex flex-col gap-4 rounded-xl"
        >
          <div>
            <h4 className="text-xl font-medium">Call</h4>
            <h5 className="text-zomato-400 font-medium">+917314994677</h5>
          </div>
          <div>
            <h4 className="text-xl font-medium">Direction</h4>
            <div className="w-full h-48">
              <MapContainer
                center={[22.71445098119874, 75.86895520270402]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[22.71445098119874, 75.86895520270402]}>
                  <Popup>
                    Guru Kripa hotel, Chhoti Gwaltoli, <br /> Indore, Madhya
                    Pradesh 452001
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <p>13, Chhoti Gwaltoli, Sarwate Bus Stand, Indore</p>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
                <MdContentCopy /> Copy
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
                <span className="text-zomato-400">
                  <FaDirections />
                </span>
                Direction
              </button>
            </div>
          </div>
          <div className="my-4 w-full  md:hidden flex flex-col gap-4">
            <Mapview
              title={reduxState?.name}
              phno={`+91${reduxState?.contactNumber}`}
              mapLocation={getLatLong(reduxState?.mapLocation)}
              address={reduxState?.address}
            />
          </div>
        </aside>
      </div>
    </>
  );
};

export default Overview;
