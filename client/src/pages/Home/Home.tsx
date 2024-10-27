
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Header from "../../components/Header/Header";
import Hero from "../../Section/Home/Hero/Hero";
import Unique from "../../Section/Home/Unique/Unique";
import Discount from "../../Section/Home/Discount/Discount";
import Newslater from "../../Section/Home/Newslater/Newslater";
import Footer from "../../components/Footer/Footer";
import MenuHome from "../../components/Header/MenuHome";
import { useAudio } from "../../store/useAudio";
import { useEffect } from "react";


const Home = () => {
  const {setIsPlaying } = useAudio();
  useEffect(() => {
    setIsPlaying(false)
  }, []);
  return (
    <div>
      <HeaderBar />
      <Header menu={<MenuHome />}/>
      <Hero />
      <Unique />
      <Discount />
      <Newslater />
      <Footer />
    </div>
  );
};

export default Home;
