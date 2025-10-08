import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../../hook/useApps";
import downlodeIcon from "../../assets/icon-downloads.png";
import retingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import AppError from "../../components/AppError/AppError";

const App = () => {
  const { id } = useParams();
  const { apps } = useApps() || {};
  const app = apps?.find((a) => String(a.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("Installation")) || [];
    const found = existingList.some((item) => item.id === app?.id);
    setIsInstalled(found);
  }, [app?.id]);

  if (!app) {
    return <AppError />;
  }

  const handleInstallation = () => {
    let existingList = JSON.parse(localStorage.getItem("Installation"));
    if (!Array.isArray(existingList)) {
      existingList = [];
    }

    const alreadyInstalled = existingList.some((item) => item.id === app.id);
    if (alreadyInstalled) {
      alert(`${app.title} is already installed.`);
      setIsInstalled(true);
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem("Installation", JSON.stringify(updatedList));
    setIsInstalled(true);
    alert(`${app.title} installed successfully!`);
  };

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

  const validRatings = Array.isArray(ratings) ? ratings : [];

  return (
    <div className="container mx-auto my-10 px-2">
      <div className="flex items-center flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={title}
          className="h-auto w-4/12 rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="space-y-5">
          <div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-gray-500 text-xl">
              Developed by <span className="text-purple-500">{companyName}</span>
            </p>
          </div>
          <hr className="border-gray-500" />

          <div className="flex items-center gap-10">
            <div className="flex flex-col items-start gap-2.5">
              <img
                src={downlodeIcon}
                alt=""
                className="transition-transform duration-300 hover:scale-110"
              />
              <span className="text-xs text-gray-600">Downloads</span>
              <span className="font-extrabold text-4xl">{downloads}</span>
            </div>

            <div className="flex flex-col items-start gap-2.5">
              <img
                src={retingIcon}
                alt=""
                className="transition-transform duration-300 hover:scale-110"
              />
              <span className="text-xs text-gray-600">Avg Rating</span>
              <span className="font-extrabold text-4xl">{ratingAvg}</span>
            </div>

            <div className="flex flex-col items-start gap-2.5">
              <img
                src={reviewIcon}
                alt=""
                className="transition-transform duration-300 hover:scale-110"
              />
              <span className="text-xs text-gray-600">Reviews</span>
              <span className="font-extrabold text-4xl">{reviews}</span>
            </div>
          </div>

          <button
            onClick={handleInstallation}
            disabled={isInstalled}
            className={`cursor-pointer mt-4 px-4 py-2 rounded text-white transition-transform duration-300 hover:scale-105 ${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <hr className="border-gray-500 mt-10" />

      <div className="my-10">
        <h3 className="font-semibold mb-2 text-2xl">Ratings</h3>
        {validRatings.length > 0 ? (
          validRatings.map((r, i) => (
            <div key={i} className="flex items-center mb-2">
              <span className="w-14 text-sm font-medium">{r.name}</span>
              <div className="flex-1 mx-2 bg-gray-200 rounded h-4">
                <div
                  className="bg-orange-400 h-4 rounded transition-transform duration-300 hover:scale-x-105"
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

      <hr className="border-gray-500 mb-10" />

      <div className="mb-10">
        <h3 className="font-semibold mb-2 text-2xl">Description</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default App;
