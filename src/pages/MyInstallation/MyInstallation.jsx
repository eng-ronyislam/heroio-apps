import React, { useEffect, useState } from "react";
import Title from "../../components/TitleSectoin/Title";
import InstalledApps from "../../components/InstalledApps/InstalledApps";

const MyInstallation = () => {
  const [installList, setInstallList] = useState([]);
  useEffect(() => {
    const savesList = JSON.parse(localStorage.getItem("Installation"));
    if (savesList) setInstallList(savesList);
  }, []);
  return (
    <div className="bg-base-300 ">
      <div className="container mx-auto">
        <Title
          title="Your Installed Apps"
          subtitle="Explore All Trending Apps on the Market developed by us"
        ></Title>
        <InstalledApps installList={installList}></InstalledApps>
      </div>
    </div>
  );
};

export default MyInstallation;
