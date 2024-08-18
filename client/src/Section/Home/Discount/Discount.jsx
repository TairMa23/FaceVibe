import React from 'react'
import Button from '../../../components/Button/Button'
import { IoCheckmark } from "react-icons/io5";

const Discount = () => {
    const myIconStyle = {
        color: '#7569B2'
    }
    return (
        <div className='bg-my-lightpink dark:bg-dark-background relative py-12'>
            <div className='container mx-auto'>
                <h2 className='text-sectionTitle fnt text-5xl font-bold text-center dark:text-dark-text py-4 pb-12'>
                    Discover the Unique Benefits of Our Project
                </h2>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-4'>
                    <div>
                        <h6 className='text-4xl text-my-pink fnt font-bold pt-4'>
                            Uniquely Tailored to Enhance Your Experience
                        </h6>
                        <ul className='grid grid-cols-1 md:grid-cols-2 mb-8 mt-6'>
                            <li className='flex items-center text-textBlue pb-2 text-xl list-item-animated'>
                                <IoCheckmark style={myIconStyle} size="28px" /> Solving the Cold Start Problem
                            </li>
                            <li className='flex items-center text-textBlue pb-2 text-xl list-item-animated'>
                                <IoCheckmark style={myIconStyle} size="28px" /> Use of AI technology
                            </li>
                            <li className='flex items-center text-textBlue pb-2 text-xl list-item-animated'>
                                <IoCheckmark style={myIconStyle} size="28px" /> User convenience
                            </li>
                            <li className='flex items-center text-textBlue pb-2 text-xl list-item-animated'>
                                <IoCheckmark style={myIconStyle} size="28px" /> Real-Time Feedback
                            </li>
                            <li className='flex items-center text-textBlue pb-2 text-xl list-item-animated'>
                                <IoCheckmark style={myIconStyle} size="28px" /> Personalized Recommendations
                            </li>
                            <li className='flex items-center text-textBlue pb-2 text-xl list-item-animated'>
                                <IoCheckmark style={myIconStyle} size="28px" /> Cross-Platform Compatibility
                            </li>
                            <li className='flex items-center text-textBlue pb-2 text-xl list-item-animated'>
                                <IoCheckmark style={myIconStyle} size="28px" /> Long-Term Usefulness
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <img src="/images/robot.png" className='w-[800px] object-cover ml-24' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount
