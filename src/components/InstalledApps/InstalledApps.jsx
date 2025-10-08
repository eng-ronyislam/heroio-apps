import React, { useState, useEffect } from "react";
import downlodIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const InstalledApps = () => {
  const [installList, setInstallList] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("Installation")) || [];
    setInstallList(stored);
  }, []);

  const sortedApps = () => {
    let sorted = [...installList];
    if (sortOrder === "high-low") {
      return sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === "low-high") {
      return sorted.sort((a, b) => a.downloads - b.downloads);
    }
    return sorted;
  };

  const handleRemove = (id) => {
    const updatedList = installList.filter((app) => app.id !== id);
    setInstallList(updatedList);
    localStorage.setItem("Installation", JSON.stringify(updatedList));
  };

  return (
    <div>
      <div className="mt-10 flex items-center justify-between flex-col md:flex-row gap-4">
        <h3 className="font-semibold text-2xl">
          ({sortedApps().length}) Apps Found
        </h3>

        <div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered"
          >
            <option value="" disabled selected>Sort by Downloads</option>
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>
        </div>
      </div>

      <div className="py-10">
        {sortedApps().map((app) => {
          const { image, title, downloads, ratingAvg, size, id } = app;

          return (
            <div
              key={id}
              className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 mb-2 border border-gray-100"
            >
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gray-200 rounded-md flex-shrink-0 mr-4">
                  {image && (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  )}
                </div>

                <div>
                  <div className="font-medium text-sm text-gray-900">{title}</div>
                  <div className="flex gap-2 mt-1">
                    <div className="flex items-center bg-green-50 px-2 py-1 rounded text-xs text-green-600">
                      <img src={downlodIcon} alt="" className="w-4 h-4 mr-1" />
                      {downloads}
                    </div>
                    <div className="flex items-center bg-orange-50 px-2 py-1 rounded text-xs text-orange-500">
                      <img src={ratingIcon} alt="" className="w-4 h-4 mr-1" />
                      {ratingAvg}
                    </div>
                    <div className="flex items-center px-2 py-1 rounded text-xs text-gray-500">
                      {size} MB
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleRemove(id)}
                className="cursor-pointer mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-transform duration-300 hover:scale-105"
              >
                Uninstall
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InstalledApps;
