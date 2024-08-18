import React from 'react';
import { FaWhatsapp, FaMapLocationDot } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Newslater = () => {
    return (
        <div id="NewslaterSection" className="dark:bg-dark-background relative py-6">
            <div className="absolute inset-0 z-0 opacity-50"></div>
            <div className="textDiv relative z-10 flex flex-col justify-center items-center container mx-auto">
                <div className='flex flex-col justify-center items-center container mx-auto'>
                    <h2 className='text-6xl text-sectionTitle font-bold fnt text-center mb-12 dark:text-white'>Contact Way</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='flex items-center gap-2'>
                            <a href="https://api.whatsapp.com/send?phone=9720584055147&text=faceVibe" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={100} className="text-[#1BE982] p-2 rounded-full  " />
                            </a>
                            <div className='flex flex-col text-textBlue text-lg font-semibold'></div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={100} className="text-[#afc3f2] p-2 rounded-full  " />
                            </a>
                            <div className='flex flex-col text-textBlue text-lg font-semibold'></div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <a href="https://www.google.com/maps/search/?api=1&query=161+Gefen+Street,+Mavoa" target="_blank" rel="noopener noreferrer">
                                <FaMapLocationDot size={100} className="text-[#f0b8ac] p-2 rounded-full  " />
                            </a>
                            <div className='flex flex-col text-textBlue text-lg font-semibold'>
                        
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <a href="mailto:r9822501@gmail.com" target="_blank" rel="noopener noreferrer">
                                <IoIosMail size={100} className="text-[#d596b5] p-2 rounded-full  " />
                            </a>
                            <div className='flex flex-col text-my-subText text-lg font-semibold'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslater;
