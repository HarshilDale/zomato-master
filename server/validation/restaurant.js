import joi from "joi";

export const ValidateRestaurantObject = (restaurantObj) => {
  const Schema = joi.object({
    name: joi.string().required(),
    city: joi.string().required(),
    address: joi.string().required(),
    mapLocation: joi.string().required(),
    cuisine: joi.string().required(),
    restaurantTimings: joi.string().required(),
    contactNumber: joi.string().required(),
    website: joi.string().required(),
    popularDishes: joi.string().required(),
    averageCost: joi.string().required(),
    amenties: joi.string().required(),
    menuImage: joi.string().required(),
  });
  return Schema.validateAsync(resId);
};
