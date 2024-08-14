import React from "react";
import Logo from "../Header/Logo";
import FooterBar from "../FooterBar/FooterBar";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="py-5">
        <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-3 justify-items-center md:justify-items-start items-center mt-6 gap-6">
          <div className="mx-6 text-center md:text-left flex justify-center items-center">
              <img src="/images/logo.png" className='w-[180px] object-cover' alt="" />
              
            <form className="flex items-center py-4 gap-2"></form>
          </div>
          <div className="md:mr-6 mx-6 text-left">
            <h2 className="text-my-subText font-bold text-lg">Development Team</h2>
            <ul className="text-textBlue text-sm">
              <li className="py-2">
                The site was developed by a team of students, Avitan Reut Julie
                and Mazuz Tair, for a degree in software engineering at SCE
                Ashdod campus - the ultra-Orthodox track, led by Chavatzelet
                Cohen and Lior Aronstein.
              </li>
            </ul>
            <h2 className="text-my-Blue font-bold text-lg mt-2">
              © 2024 FACEVIBE. All rights reserved.
            </h2>
          </div>
          <div className="md:ml-6 mx-6 text-left">
            <h2 className="text-my-subText font-bold text-lg">
              Confirmation of Consent
            </h2>
            <ul className="text-textBlue text-sm">
              <li className="py-2">
                By using this website, you agree to the following terms: Your
                personal information, including facial features and emotions
                collected through the camera, will be stored and processed for
                the purpose of creating a personalized user profile. We will
                maintain your privacy and protect your information in accordance
                with our privacy policy. By entering the site and using it, you
                confirm your agreement to these terms.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default Footer;
