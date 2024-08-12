import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Result from "../../Section/Feedback/Result/Result";
import Questions from "../../Section/Feedback/Questions/Questions";
import Menu from "../../components/Header/Menu";
const Feedback: React.FC = () => {
  return (
    <div>
      <HeaderBar />
      <Header menu={<Menu />} />
      <Result />
      <Questions />
      <Footer />
    </div>
  );
};

export default Feedback;
