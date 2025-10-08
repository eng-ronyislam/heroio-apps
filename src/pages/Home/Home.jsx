import React from "react";
import Hero from "../../components/Hero/Hero";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection";
import Title from "../../components/TitleSectoin/Title";
import { Link, } from "react-router";
import TrandingApps from "../../components/TrandingApps/TrandingApps";
import useApps from "../../hook/useApps";

const Home = () => {
  const { apps, loading, error } = useApps();
  const trandingApps = apps.slice(0, 8);

  return (
    <div className="bg-base-300">
      <Hero></Hero>
      <AchievementsSection></AchievementsSection>
      <Title
        title="Trending Apps"
        subtitle="Explore All Trending Apps on the Market developed by us"
      ></Title>
      <TrandingApps trandingApps={trandingApps}></TrandingApps>
      <div className="py-10 text-center">
        <Link
          to="./apps"
          className="btn text-white font-semibold hover:scale-105 transition-transform duration-300"
          style={{
            background:
              "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)",
          }}
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
