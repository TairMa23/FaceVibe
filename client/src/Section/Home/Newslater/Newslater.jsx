import React from 'react';
import Button from '../../../components/Button/Button';

const Newslater = () => {
    const divStyle = {
        backgroundImage: `url('/images/newslater/newslater.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100%',
        padding: '75px 0px',
    };

    return (
        <div id="NewslaterSection" className="relative" style={divStyle}>
            <div className="absolute inset-0 z-0 bg-gray-300 opacity-50"></div>
            <div className="textDiv relative z-10 flex flex-col justify-center items-center container mx-auto">
                <div className='flex flex-col justify-start justify-center items-center container mx-auto'>
                    <h2 className='text-4xl text-textBlue font-bold fnt text-center mb-12'>Contact Way</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='flex items-center gap-2'>
                            <span className="bg-[#5726DF] rounded-full min-h-10 min-w-10"></span>
                            <div className='flex flex-col text-my-subText text-lg font-semibold'>
                                <span>Tel:  058-405-5147</span>
                                <span>
                                    E-Mail: <a href="mailto:tairmazuz15@gmail.com" className='text-blue-500 hover:underline'>tairmazuz15@gmail.com</a>
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className="bg-[#FB2E86] rounded-full min-h-10 min-w-10"></span>
                            <div className='flex flex-col text-my-subText text-lg font-semibold'>
                                <span>Tel:  054-982-2501</span>
                                <span>
                                    E-Mail: <a href="mailto:reutavitan22501@gmail.com" className='text-blue-500 hover:underline'>reutavitan22501@gmail.com</a>
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className="bg-[#FFB265] rounded-full min-h-10 min-w-10"></span>
                            <div className='flex flex-col text-my-subText text-lg font-semibold'>
                                <span>abotinsky 84, </span>
                                <span>Ashdod, Israel</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className="bg-[#1BE982] rounded-full min-h-10 min-w-10"></span>
                            <div className='flex flex-col text-my-subText text-lg font-semibold'>
                                <span>
                                    <a href="/contact" className='text-blue-500 hover:underline'>Get In Touch</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslater;
