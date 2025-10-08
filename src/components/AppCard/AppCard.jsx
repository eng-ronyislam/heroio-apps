import React from "react";
import downlodIcon from "../../assets/icon-downloads.png" 
import ratingIcon from "../../assets/icon-ratings.png"

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mx-auto hover:scale-105 transition ease-in-out cursor-pointer">
      <div className="bg-gray-200 rounded-md h-40 mb-4 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="font-semibold text-sm text-gray-800 mb-2">{title}</div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center bg-green-50 px-2 py-1 rounded text-xs text-green-600">
          <img src={downlodIcon} alt="" className="w-4 h-4 mr-1" />
          {downloads}
        </div>
        <div className="flex items-center bg-orange-50 px-2 py-1 rounded text-xs text-orange-500">
          <img src={ratingIcon} alt="" className="w-4 h-4 mr-1" />
          {ratingAvg}
        </div>
      </div>
    </div>
  );
};

export default AppCard;
