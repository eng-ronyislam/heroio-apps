import React from "react";
import Hero from "../../components/Hero/Hero";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection";
import Title from "../../components/TitleSectoin/Title";
import { Link } from "react-router";
import TrandingApps from "../../components/TrandingApps/TrandingApps";
import useApps from "../../hook/useApps";

const Home = () => {
  const { apps, loading } = useApps();
  const trandingApps = apps?.slice(0, 8) || [];

  return (
    <div className="bg-base-300">
      <Hero />
      <AchievementsSection />
      <Title
        title="Trending Apps"
        subtitle="Explore All Trending Apps on the Market developed by us"
      />

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      ) : (
        <TrandingApps trandingApps={trandingApps} />
      )}
      <div className="py-10 text-center">
        <Link
          to="./apps"
          className="btn text-white font-semibold hover:scale-105 transition-transform duration-300"
          style={{
            background: "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)",
          }}
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
