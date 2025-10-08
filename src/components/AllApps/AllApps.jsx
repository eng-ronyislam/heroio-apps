import React, { useState } from "react";
import AppCard from "../AppCard/AppCard";

const AllApps = ({ apps = [] }) => {
  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();

  // ✅ Safe filtering
  const filteredApps = term
    ? apps.filter(app =>
        app?.title?.toLocaleLowerCase().includes(term)
      )
    : apps;

  // Optional: debug missing names
  // apps.forEach(app => {
  //   if (!app?.name) console.warn("⚠ Missing app.name:", app);
  // });

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between flex-col md:flex-row">
        <h3 className="font-semibold text-2xl">
          ({filteredApps.length}) Apps Found
        </h3>

        <div>
          <label className="input bg-base-300">
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
              className="grow bg-base-300"
              placeholder="Search apps"
            />
          </label>
        </div>
      </div>

      <div className="container mx-auto py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
