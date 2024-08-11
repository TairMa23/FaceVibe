import React from "react";
import Button from "../../../components/Button/Button";

const Hero = () => {
  return (
    <div className="bg-my-lightpink relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-4 flex-1  py-20">
        <div className="">
          <span className="font-bold text-lg text-my-pink">
            Best Furniture For Your Style....
          </span>
          <h2 className="fnt font-bold text-6xl py-8 text-my-Blue ">
            FACE VIBE <br />
            <span className="text-3xl text-textBlue">Smart Recommendations</span>
          </h2>
          <p className="text-my-subText font-bold text-xl mb-8">
            Find the perfect fit for your space – Our advanced technology
            analyzes your reactions to recommend furniture that suits your
            taste.
          </p>
          <Button
            className="bg-my-pink px-6 py-3 rounded-sm text-white fnt font-semibold"
            title="Lets Start"
            // link="/Feedback"
            link="/preferenceGallery"
          />
        </div>
        <img
          src="/images/emoji.gif"
          className="w-[600px] h-[500px] object-cover hidden lg:block"
          alt="Animated GIF"
        />
      </div>
    </div>
  );
};

export default Hero;
