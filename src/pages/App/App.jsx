import React from "react";
import { useParams } from "react-router";
import useApps from "../../hook/useApps";
import downlodeIcon from "../../assets/icon-downloads.png"
import retingIcon from "../../assets/icon-ratings.png"
import reviewIcon from "../../assets/icon-review.png"


const App = () => {
  const { id } = useParams();
  const { apps } = useApps() || {}; // safe destructuring
  const app = apps?.find((a) => String(a.id) === id);

  // If data not yet loaded or app not found
  if (!app) {
    return (
      <div className="text-center py-10 text-gray-600">
        Loading app details or app not found...
      </div>
    );
  }

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;

  // Handle missing or invalid ratings
  const validRatings = Array.isArray(ratings) ? ratings : [];

  return (
    <div className="container mx-auto my-10 px-2">
      {/* Header Section */}
      <div className="flex items-center flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={title}
          className="w-auto h-auto flex-1/3 rounded-lg object-cover shadow-lg "
        />
        <div className="flex-2/3 space-y-5">
          <div><h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-500 text-xl">Developed by <span className="text-purple-500">{companyName}</span></p></div>
          <hr className="border-gray-500" />

          <div className="flex items-center gap-10">
            <div className="flex flex-col items-start gap-2.5 ">
                <img src={downlodeIcon} alt="" />
              <span className="text-xs text-gray-600">Downloads</span>
              <span className="font-extrabold text-4xl">{downloads}</span>
            </div>
        
            <div className="flex flex-col items-start gap-2.5">
                <img src={retingIcon} alt="" />
              <span className="text-xs text-gray-600 ">Avg Rating</span>
              <span className="font-extrabold text-4xl">{ratingAvg}</span>
            </div>
            <div className="flex flex-col items-start gap-2.5 ">
                <img src={reviewIcon} alt="" />
              <span className="text-xs text-gray-600">Reviews</span>
              <span className="font-extrabold text-4xl">{reviews}</span>
            </div>
          </div>

          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Install Now ( {size}  MB )
          </button>
        </div>
      </div>

      <hr className="border-gray-500 mt-10" />
      <div className="my-10 ">
        <h3 className="font-semibold mb-2 text-2xl">Ratings</h3>
        {validRatings.length > 0 ? (
          validRatings.map((r, i) => (
            <div key={i} className="flex items-center mb-2">
              <span className="w-14 text-sm font-medium">{r.name}</span>
              <div className="flex-1 mx-2 bg-gray-200 rounded h-4">
                <div
                  className="bg-orange-400 h-4 rounded"
                  style={{
                    width: `${
                      (r.count /
                        Math.max(...validRatings.map((rt) => rt.count))) *
                      100
                    }%`,
                  }}
                />
              </div>
              <span className="text-gray-600 text-xs">{r.count}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No ratings available.</p>
        )}
      </div>

      <hr className="border-gray-500 mb-10"  />
      <div className="mb-10">
        <h3 className="font-semibold mb-2 text-2xl">Description</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default App;
