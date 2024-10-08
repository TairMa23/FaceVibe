import React from "react";
import Button from "../../../components/Button/Button";
import GifLooper from "../../../components/GifLooper/GifLooper"; // שנה את הנתיב בהתאם למיקום הקומפוננטה
import { useAudio } from "../../../store/useAudio";

const Hero = () => {
  const { setIsPlaying } = useAudio();

  const handleStartClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative">
      <div className="bg-my-lightpink dark:bg-dark-background py-30">
      <div className="bg-my-lightpink dark:bg-dark-background h-10"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center p-4 flex-1">
          <div className="">
            <span className="font-bold text-lg text-my-pink  ">
              Best Furniture For Your Style....
            </span>
            <h2 className="fnt font-bold text-6xl py-8 text-my-Blue dark:text-dark-text">
              FACE VIBE <br />
              <span className="text-3xl text-textBlue">
                Smart Recommendations
              </span>
            </h2>
            <p className="text-my-subText font-bold text-xl mb-10">
              Find the perfect fit for your space – Our advanced technology
              analyzes your reactions to recommend furniture that suits your
              taste.
            </p>
            <Button
              className="bg-my-pink px-6 py-3 rounded-3xl text-white fnt font-semibold"
              title="Let's Start"
              link="/preferenceGallery"
            />
          </div>
          <div className="w-[600px] h-[400px] hidden lg:block">
            <GifLooper />
          </div>
        </div>
      </div>
      {/* אלמנט שיקבל צבע רקע במרווח */}
      <div className="bg-my-lightpink dark:bg-dark-background h-20"></div>
    </div>
  );
};

export default Hero;
