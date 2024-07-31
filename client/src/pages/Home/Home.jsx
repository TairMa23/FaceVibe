import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Header from "../../components/Header/Header";
import Hero from "../../Section/Home/Hero/Hero";
import Unique from "../../Section/Home/Unique/Unique";
import Discount from "../../Section/Home/Discount/Discount";
import Newslater from "../../Section/Home/Newslater/Newslater";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HeaderBar />
      <Header />
      <Hero />
      <Unique />
      <Discount />
      <Newslater />
      <Footer />
    </div>
  );
};

export default Home;
