import React from 'react';
import Image from 'next/image';
import userData from '../data/data';
import AboutImg from '../public/aboutImg.png';

const About = () => {
  return (
    <div className="h-screen relative bg-white flex flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-10 m-7 uppercase tracking-[20px] text-gray-500 xl:text-xl mb-20'>
            About
        </h3>
        <div className="rounded-full overflow-hidden bg-white border-2 border-gray-300 md:border-none w-40 h-40 md:w-auto md:h-auto mt-20">
            <Image
                src={AboutImg}
                alt="about"
                className='mt-4 md:mt-0 xl:w-[600px] xl:h-[600px] w-full h-full object-cover' 
            />
        </div>        
        <div className='space-y-10 px-0 md:px-10'>
            <div className="font-bold pt-10 sm:text-xl md:text-4xl">{userData.about.header}</div>
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
