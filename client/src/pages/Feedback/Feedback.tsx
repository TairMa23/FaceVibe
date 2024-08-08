import React, { useState, ChangeEvent } from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Result from "../../Section/Feedback/Result/Result";
import Questions from "../../Section/Feedback/Questions/Questions";

const Feedback: React.FC = () => {
   

  return (
    <div>
      <HeaderBar />
      <Header />
      <Result/>
      <Questions/>
      <Footer />
    </div>
  );
};

export default Feedback;
