import React from "react";
import Hero from "../../components/Hero/Hero";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection";
import Title from "../../components/TitleSectoin/Title";
import { useLoaderData } from "react-router";
import TrandingApps from "../../components/TrandingApps/TrandingApps";

const Home = () => {
  const apps = useLoaderData();

  return (
    <div>
      <Hero></Hero>
      <AchievementsSection></AchievementsSection>
      <Title
        title="Trending Apps"
        subtitle="Explore All Trending Apps on the Market developed by us"
      ></Title>
      <TrandingApps apps={apps}></TrandingApps>
    </div>
  );
};

export default Home;
