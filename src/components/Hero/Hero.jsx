import React from "react";
import playstor from "../../assets/playstore.png";
import appstore from "../../assets/app-store.png";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200">
        <div className="mt-20 text-center container mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold  mx-auto">
              We Build <br /> <span className="logo-text">Productive</span> Apps
            </h1>
            <p className="text-gray-600">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="space-x-2 flex justify-center">
              <a href="https://play.google.com/store" target="_blank">
                <button className="p-3 text-xl font-semibold border border-gray-400 rounded-[4px] flex items-center gap-2 cursor-pointer hover:bg-gray-100 transition">
                  <img src={playstor} alt="Play Store" className="w-5 h-5" />
                  <span>Google Play</span>
                </button>
              </a>

              <a href="https://www.apple.com/app-store/" target="_blank">
                <button className="p-3 text-xl font-semibold border border-gray-400 rounded-[4px] flex items-center gap-2 cursor-pointer hover:bg-gray-100 transition">
                  <img src={appstore} alt="App Store" className="w-5 h-5" />
                  <span>App Store</span>
                </button>
              </a>
            </div>

            <img src={heroImg} alt="" className="mt-10 mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
