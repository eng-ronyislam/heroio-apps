import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../../hook/useApps";
import downlodeIcon from "../../assets/icon-downloads.png";
import retingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import AppError from "../../components/AppError/AppError";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { id } = useParams();
  const { apps, loading } = useApps() || {};
  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps?.find((a) => String(a.id) === id);

  useEffect(() => {
    if (!app) return;
    const existingList = JSON.parse(localStorage.getItem("Installation")) || [];
    const found = existingList.some((item) => item.id === app.id);
    setIsInstalled(found);
  }, [app?.id, app]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  if (!app) {
    return <AppError />;
  }

  const handleInstallation = () => {
    let existingList = JSON.parse(localStorage.getItem("Installation")) || [];
    const alreadyInstalled = existingList.some((item) => item.id === app.id);
    if (alreadyInstalled) {
      toast.info(`${app.title} is already installed.`, {
        position: "top-right",
        theme: "colored",
      });
      setIsInstalled(true);
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem("Installation", JSON.stringify(updatedList));
    setIsInstalled(true);
    toast.success(`✅ ${app.title} installed successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      theme: "colored",
    });
  };

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;

  const validRatings = Array.isArray(ratings) ? ratings : [];
  const chartData = validRatings.map((r) => ({
    name: r.name,
    count: r.count,
  }));

  return (
    <div className="container mx-auto my-10 px-2">
      <div className="flex items-center flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={title}
          className="h-auto w-4/12 rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="space-y-5">
          <div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-gray-500 text-xl">
              Developed by{" "}
              <span className="text-purple-500">{companyName}</span>
            </p>
          </div>
          <hr className="border-gray-500" />

          <div className="flex items-center gap-10">
            <div className="flex flex-col items-start gap-2.5">
              <img
                src={downlodeIcon}
                alt=""
                className="transition-transform duration-300 hover:scale-110"
              />
              <span className="text-xs text-gray-600">Downloads</span>
              <span className="font-extrabold text-4xl">{downloads}</span>
            </div>

            <div className="flex flex-col items-start gap-2.5">
              <img
                src={retingIcon}
                alt=""
                className="transition-transform duration-300 hover:scale-110"
              />
              <span className="text-xs text-gray-600">Avg Rating</span>
              <span className="font-extrabold text-4xl">{ratingAvg}</span>
            </div>

            <div className="flex flex-col items-start gap-2.5">
              <img
                src={reviewIcon}
                alt=""
                className="transition-transform duration-300 hover:scale-110"
              />
              <span className="text-xs text-gray-600">Reviews</span>
              <span className="font-extrabold text-4xl">{reviews}</span>
            </div>
          </div>

          <button
            onClick={handleInstallation}
            disabled={isInstalled}
            className={`cursor-pointer mt-4 px-4 py-2 rounded text-white transition-transform duration-300 hover:scale-105 ${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>

          <ToastContainer position="top-right" autoClose={2000} theme="colored" />
        </div>
      </div>

      <hr className="border-gray-500 mt-10" />

      <div className="my-10">
        <h3 className="font-semibold mb-4 text-2xl">Ratings</h3>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="count" fill="#F97316" radius={[4, 4, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500 text-sm">No ratings available.</p>
        )}
      </div>

      <hr className="border-gray-500 mb-10" />

      <div className="mb-10">
        <h3 className="font-semibold mb-2 text-2xl">Description</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default App;
