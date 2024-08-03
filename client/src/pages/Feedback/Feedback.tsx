import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Radar from "../../components/Radar/Radar";
import BoxPlot from "../../components/BoxPlot/BoxPlot";
const Feedback: React.FC = () => {
  return (
    <div>
      <HeaderBar />
      <Header />
      <Radar/> 
      <BoxPlot/>
      <Footer />
    </div>
  );
};

export default Feedback;
