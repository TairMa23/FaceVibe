import React from 'react'

const Unique = () => {
    return (
        <div id="UniqueSection" className='py-12'>
            <div className='container mx-auto px-4'>
                <div className='flex items-start flex-col md:flex-row'>
                    <div className="text-left w-full">  
                        <div className="text-center">  
                            <h2 className='text-sectionTitle text-6xl text-se fnt font-bold'>About Us</h2>
                        </div>
                        <h5 className='text-my-subText text-2xl font-medium flex items-center gap-2 pt-10'>
                            <span className="bg-my-pink rounded-full min-h-3 min-w-3"></span>
                            Who we are?
                        </h5>
                        <h5 className='text-textBlue text-xl font-medium pt-1'>
                            A team of female software engineering degree students at SCE. Our team members are Avitan Reut Julie and Mazuz Tair. Our project focuses on promoting an advanced recommendation system for an e-commerce site, through pre-processing to build a user profile based on facial expression and emotion recognition technologies.
                        </h5>
                        <h5 className='text-my-subText text-2xl font-medium flex items-center gap-2 py-2 pt-8'>
                            <span className="bg-[#151875] rounded-full min-h-3 min-w-3"></span>
                            What are we doing?
                        </h5>
                        <h5 className='text-textBlue text-xl font-medium pt-1'>
                            A recommendation system is an effective tool for filtering online information, which is common due to the changing habits of computer users and personalization trends. But there are several major challenges that affect the performance of a recommender system, such as cold start and data sparsity. FACEVIBE focuses on solving these problems by building an advanced user profile based on a preferences questionnaire that is performed automatically by presenting images to the user. Recognizing emotions through facial expressions allows the system to understand the user as a single person and create a user experience that matches his reality and desires.
                        </h5>
                        <h5 className='text-my-subText text-2xl font-medium flex items-center gap-2 py-1 pt-8'>
                            <span className="bg-[#9ff7fe] rounded-full min-h-3 min-w-3"></span>
                            The technologies we use
                        </h5>
                        <h5 className='text-textBlue text-xl font-medium pt-2'>
                            FACEVIBE uses advanced technologies of facial expression and emotion recognition, AI and machine learning. Using these tools we can create a dynamic and advanced profile that exactly matches the preferences and desires of the user. All the information collected from the preference questionnaires and the emotion recognition is used as a basis for building a personalized user profile.
                        </h5>
                        <h5 className='text-my-subText text-2xl font-medium flex items-center gap-2 py-1 pt-8'>
                            <span className="bg-[#f0b8ac] rounded-full min-h-3 min-w-3"></span>
                            Why choose us?
                        </h5>
                        <h5 className='text-textBlue text-xl font-medium pt-2'>
                            FACEVIBE offers an innovative solution to existing problems in recommendation systems, with an emphasis on a personal and friendly user experience. We guarantee our users an accurate and reliable recommendation system, which is based on advanced technologies and a deep understanding of the user's preferences. Our team is dedicated and innovative, and committed to providing the best service to our users.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unique
