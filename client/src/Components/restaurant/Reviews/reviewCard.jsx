import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const ReviewCard = () => {
  return (
    <>
      <div className="my-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="data:image/jpeg;base64,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"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Harshil Dale</h3>
              <small className="text-gray-500">
                59 reviews &bull; 38 Followers
              </small>
            </div>
          </div>
          <button className="text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              3 <TiStarFullOutline />
            </span>
            <h5 className="font-regular uppercase">Delivery</h5>
            <small className="text-gray-500">3 days ago</small>
          </div>
          <div className="w-full">
            <p className="w-full text-gray-600 font-light text-base">
              I experienced a delicious main course and caring staff—but pity
              about the French fries. I visited for lunch with a friend. We were
              delighted by the authentic South Indian main course. The spices
              and flavors were extremely impressive for a vegetarian restaurant.
              They looked tasty, but we discovered they were undercooked and too
              oily. We left most of them untouched. For $15, the quality should
              have been much higher. When the waiter visited our table and asked
              if something was wrong, we explained that we didn’t like the
              French fries. He was apologetic and said, “We’re sorry for your
              experience with the French fries; we hope you liked the main
              course." We said yes we had. He was sympathetic and offered us a
              discount on the price of the French fries. We left a tip on the
              table and exited the restaurant with a smile. Overall, I enjoyed
              our experience. They did take the time to make the table ready,
              the main course was good, the staff was caring, but the French
              fries were awful. I’d love to visit again. I'd recommend it as a
              nice place to go with friends, family, or a partner. Do try their
              famous masala dosa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
