import React from "react";
import useApps from "../../hook/useApps";
import Title from "../../components/TitleSectoin/Title";
import AllApps from "../../components/AllApps/AllApps";

const Apps = () => {
  const { apps } = useApps();
  return (
    <div className="bg-base-300">
      <div className="container mx-auto">
      <Title
        title="Our All Applications"
        subtitle="Explore All Apps on the Market developed by us. We code for Millions"
      ></Title>
      <AllApps apps={apps}></AllApps>
    </div>
    </div>
  );
};

export default Apps;
