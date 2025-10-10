import React from "react";
import useApps from "../../hook/useApps";
import Title from "../../components/TitleSectoin/Title";
import AllApps from "../../components/AllApps/AllApps";

const Apps = () => {
  const { apps, loading } = useApps();
  return (
    <div className="bg-base-300">
      <div className="container px-2 mx-auto">
      <Title
        title="Our All Applications"
        subtitle="Explore All Apps on the Market developed by us. We code for Millions"
      ></Title>
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      ) : (
        <AllApps apps={apps}></AllApps>
      )}
      
    </div>
    </div>
  );
};

export default Apps;
