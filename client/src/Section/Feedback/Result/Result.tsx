import React from "react";
import Radar from "../../../components/Radar/Radar";
import BoxPlot from "../../../components/BoxPlot/BoxPlot";

const Result = () => {
  return (
    <div className="w-full py-6">
      <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 justify-items-center items-center mt-5 gap-10">
        <div className="w-full max-w-md mx-2 text-center">
          <Radar />
          <form className="flex items-center gap-8"></form>
        </div>
        <div className="w-full max-w-screen-xl mx-2 text-center h-96">
          <BoxPlot />
          <form className="flex items-center gap-8"></form>
        </div>
      </div>
    </div>
  );
};

export default Result;