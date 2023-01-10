import React from 'react';

import userData from '../data/data';

const About = () => {
  return (
    <div className="h-screen relative bg-white flex flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-10 m-7 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <img 
            src='https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/133765778_1940843839401494_724381874854283481_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=VHdVSadriZYAX-BK4KU&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfAZOTKbB96liSAFSUo3LvmZrKZj9UAoCx2QkM2-y0Z7hg&oe=63E379B3'
            className='mt-40 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[600px]' 
        />
        <div className='space-y-10 px-0 md:px-10'>
            <div className="text-4xl font-bold pt-10">{userData.about.header}</div>
            <div className='text-gray-500'>
                {userData.about.description?.map((desc, idx) => (
                    <p 
                        key={idx} 
                        className='text-xl text-gray-700 mb-4 dark:text-gray-300'>
                        {desc}
                    </p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About;
