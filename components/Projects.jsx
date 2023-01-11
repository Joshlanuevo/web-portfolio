import React from 'react';
import Image from 'next/image';
import MernHomeWork from '../public/projects/mern-homework.PNG';
import FiveJCompany from '../public/projects/5j-company.PNG';
import Eportfolio from '../public/projects/e-portfolio.PNG';
import Link from 'next/link';
import HiOutlineExternalLink from 'react-icons/hi'

const Projects = () => {
  return (
    <div className='h-screen relative bg-white grid place-items-center'>
        <h3 className='absolute top-20 m-7 uppercase tracking-[20px] text-gray-500 xl:text-xl'>
            Projects
        </h3>
        <hr className="relative top-20 w-64 h-1 mt-20 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className='flex flex-wrap justify-center gap-8 mt-36 max-w-[1200px]'>
            <div className='card flex flex-col overflow-hidden mb-5'>
                <Image src={MernHomeWork} alt="hero" className='w-[100%] h-[250px]'/>
                <div className='card-body flex flex-col gap-2 items-center '>
                    <h1 className='p-2.5 font-bold text-lg'>Mern Homework App</h1>
                    <h4 className='p-2.5 mx-5 text-center'>
                        A Web Application Homework todo app with user authentication that you can add, edit and delete your homework task.
                    </h4>
                    <p className='pt-7 px-10 text-center'><span className='font-bold'>
                        Tech used:</span> React, NodeJS, Express, MongoDB, Material-UI
                    </p>
                    <Link href="https://mernapp-homework.herokuapp.com/login" target="_blank"> 
                        <button className='pt-5 pb-5 px-10 m-5 rounded-full bg-[#000000] text-white'>
                            View
                        </button> 
                    </Link>
                </div>
            </div>
            <div className='card flex flex-col overflow-hidden'>
                <Image src={FiveJCompany} alt="hero" className='w-[100%] h-[250px]'/>
                <div className='card-body flex flex-col gap-2 items-center'>
                    <h1 className='p-2.5 font-bold text-lg'>5J Company</h1>
                    <h4 className='p-2.5 mx-5 text-center'>
                        A product prototype for our Subject Technopreneurship.
                    </h4>
                    <p className='pt-7 px-10 text-center'><span className='font-bold'>
                        Tech used:</span> React with styled component and Firebase
                    </p>
                    <Link href="https://j-company-b7e2d.web.app/" target="_blank">
                        <button className='pt-5 pb-5 px-10 mt-16 rounded-full bg-[#000000] text-white'>
                            View
                        </button> 
                    </Link>
                </div>
            </div>
            <div className='card flex flex-col overflow-hidden'>
                <Image src={Eportfolio} alt="hero" className='w-[100%] h-[250px]'/>
                <div className='card-body flex flex-col gap-2 items-center '>
                    <h1 className='p-2.5 font-bold text-lg'>E-portfolio</h1>
                    <h4 className='p-2.5 mx-5'>
                        A compilation of seminars and certificates for my subject Seminars & Fieldtrips
                    </h4>
                    <p className='pt-7 px-10 text-center'><span className='font-bold'>
                        Tech used:</span> React, CSS, Firebase</p>
                    <Link href="https://e-portfolio-2022-lanuevo.web.app" target="_blank">
                        <button className='pt-5 pb-5 px-10 mt-20 rounded-full bg-[#000000] text-white'>
                            View
                        </button> 
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;