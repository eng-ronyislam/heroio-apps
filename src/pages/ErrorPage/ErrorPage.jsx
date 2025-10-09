import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import img from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className=" bg-base-300">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center px-4 py-10">
        <img src={img} className="mb-5 w-3/12" />
        <h1 className="lg:text-5xl text-3xl font-bold text-gray-800 mb-2">
          Oops, page not found!
        </h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for is not available.
        </p>
        <button
          style={{
            background:
              "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)",
          }}
          className="btn text-white font-semibold hover:scale-105 transition-transform duration-300"
          onClick={() => window.history.back()}
        >
          Go Back!
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
