import React, { useEffect } from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderBar />
      <Header />
      <div className="bg-my-lightpink relative">
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center py-16 pb-32 items-center">
          <ContactForm />
          <img
            src="/images/contact/contact.png"
            className="w-[450px] object-cover mb-6 md:mb-0"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
