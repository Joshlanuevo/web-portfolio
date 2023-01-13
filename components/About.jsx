import React from 'react';
import Image from 'next/image';
import userData from '../data/data';
import AboutImg from '../public/aboutImg.png';

const About = () => {
  return (
    <div className="h-screen relative bg-white flex flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-10 m-7 uppercase tracking-[20px] text-gray-500 xl:text-xl'>
            About
        </h3>
        <Image
            src={AboutImg}
            alt="about"
            className='mt-40 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[600px]' 
        />
        
        <div className='space-y-10 px-0 md:px-10'>
            <div className="text-4xl font-bold pt-10">{userData.about.header}</div>
            <div className='text-gray-500'>
                {userData.about.description?.map((desc, idx) => (
                    <p 
                        key={idx} 
                        className='about-desc text-xl text-gray-700 mb-4 dark:text-gray-300'>
                        {desc}
                    </p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About;
