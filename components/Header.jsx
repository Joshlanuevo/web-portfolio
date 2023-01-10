import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            className='flex flex-row items-center'
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
        >
            <Link href="#about">
                <button className='heroButton'>About</button>
            </Link>
            <Link href="#skills">
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
                <button className='heroButton'>Projects</button>
            </Link>
        </motion.div>

        <Link href="#contact">
            <motion.div 
                className='flex flex-row items-center cursor-pointer'
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
            > 
                <SocialIcon 
                    className='cursor-pointer'
                    target="_blank" 
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase font-semibold hidden md:inline-flex text-sm text-gray-500 hover:text-[#F7AB0A]/40'>
                    Contact me
                </p>
            </motion.div>
        </Link>
    </header>
  )
}

export default Header;
