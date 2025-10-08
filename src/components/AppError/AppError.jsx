import React from 'react';
import errorImg from "../../assets/App-Error.png"

const AppError = () => {
    return (
        <div className="flex flex-col items-center py-20 justify-center bg-base-300">
        <img
          src={errorImg}
          alt="Not Found"
          className=" mb-6"
        />
        <h2 className="text-5xl font-bold text-gray-800 mb-2 text-center">OPPS!! APP NOT FOUND</h2>
        <p className="text-gray-500 mb-6">
          The App you are requesting is not found on our system. Please try another app.
        </p>
        <button style={{
              background: "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)"
            }}
          className="btn text-white font-semibold hover:scale-105 transition-transform duration-300"
          onClick={() => window.history.back()}
        >
          Go Back!
        </button>
      </div>
    );
};

export default AppError;