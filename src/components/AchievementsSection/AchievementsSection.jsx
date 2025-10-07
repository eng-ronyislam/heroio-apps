import React from "react";

const AchievementsSection = () => {
  return (
    <div>
      <div
        className="text-white py-12"
        style={{
          background: "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)",
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Trusted By Millions, Built For You
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20">
          <div className="text-center">
            <p className="text-sm mb-2">Total Downloads</p>
            <p className="text-4xl font-extrabold mb-1">29.6M</p>
            <p className="text-xs text-purple-200">21% More Than Last Month</p>
          </div>
          <div className="text-center">
            <p className="text-sm mb-2">Total Reviews</p>
            <p className="text-4xl font-extrabold mb-1">906K</p>
            <p className="text-xs text-purple-200">46% More Than Last Month</p>
          </div>
          <div className="text-center">
            <p className="text-sm mb-2">Active Apps</p>
            <p className="text-4xl font-extrabold mb-1">132+</p>
            <p className="text-xs text-purple-200">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
