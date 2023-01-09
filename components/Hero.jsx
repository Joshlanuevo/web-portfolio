import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { SocialIcon } from 'react-social-icons';

import userData from '../data/data'
import BackgroundCirle from './BackgroundCirle';
import BackgroundParticles from './BackgroundParticles';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Hello, my name is Josh Ivan', 'and I am a Web Developer'],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundParticles />
      <BackgroundCirle />
      <img 
        src={userData.heroUrl} 
        alt="hero"
        className='relative rounded-full h-40 w-40 mx-auto object-cover'
      />
      <div className="z-20">
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] '>web developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className="p-5">
          {/* Social Icons */}
          <SocialIcon url="https://www.facebook.com/joshivan1234" 
            className='mx-3'
            target="_blank" 
            fgColor='white'
            bgColor='gray'
          />
          <SocialIcon url="https://www.instagram.com/joshlanuevo/" 
            className='mx-3'
            target="_blank" 
            fgColor='white'
            bgColor='gray'
          />
          <SocialIcon url="https://github.com/Joshlanuevo" 
            className='mx-3'
            target="_blank" 
            fgColor='white'
            bgColor='gray'
          />
          <SocialIcon url="https://www.linkedin.com/in/josh-ivan-lanuevo-6ba706203/" 
            className='mx-3'
            target="_blank" 
            fgColor='white'
            bgColor='gray'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;