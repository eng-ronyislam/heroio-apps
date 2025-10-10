import React, { useState, useEffect } from "react";
import AppCard from "../AppCard/AppCard";

const AllApps = ({ apps }) => {
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const term = search.trim().toLowerCase();
    setLoading(true);

    const timer = setTimeout(() => {
      if (term) {
        const filtered = apps.filter((app) =>
          app?.title?.trim().toLowerCase().includes(term)
        );
        setFilteredApps(filtered);
      } else {
        setFilteredApps(apps);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, apps]);

  return (
    <div className="container px-2 mx-auto">
      <div className="flex items-center justify-between flex-col md:flex-row gap-4">
        <h3 className="font-semibold text-2xl">
          ({filteredApps.length}) Apps Found
        </h3>

        <div>
          <label className="input bg-base-300 flex items-center gap-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              className="grow bg-base-300 focus:outline-none"
              placeholder="Search apps"
            />
          </label>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <span className="loading loading-ring loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="container px-2 mx-auto py-10">
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-5xl font-bold py-10">
              🚫 No App Found
            </div>
          )}
          
        </div>
      )}
    </div>
  );
};

export default AllApps;
