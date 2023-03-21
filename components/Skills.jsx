import React from 'react';

const Skills = () => {
  return (
    <div className="bg-white relative text-center px-1 py-5">
        <div className="skill-wrapper relative flex flex-col text-center justify-center items-center mb-10">
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl text-center 
            flex flex-col md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
                Skills
            </h3>
            <hr className="relative top-20 w-64 h-1 mt-20 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className='div-logo-group flex flex-wrap justify-center mt-20 mb-3 p-5'>
                <div className='div-category-frontend mt-5 roounded mx-3 p-3 bg-[#EAEAEA] drop-shadow-md'>
                    <div>Frontend</div>
                </div>
                <div className='div-category-backend mt-5 rounded mx-3 p-3 bg-[#EAEAEA] drop-shadow-md'>
                    <div>Backend</div>
                </div>
                <div className='div-category-tools mt-5 rounded mx-3 p-3 bg-[#EAEAEA] drop-shadow-md'>
                    <div>Developer Tools</div>
                </div>
            </div>
            <div className='div-logo-group flex flex-wrap justify-center mt-4 pb-5'>
                <div className="div-category-frontend m-3 p-3 rounded bg-[#EAEAEA] drop-shadow-md">
                    <img src='https://cdn.worldvectorlogo.com/logos/html-1.svg' alt='' className='box-picture' />
                    <div className="logo-description">HTML</div>
                </div>
                <div className="div-category-frontend m-3 p-3 rounded bg-[#EAEAEA] drop-shadow-md">
                    <img src='https://cdn.worldvectorlogo.com/logos/css-3.svg' alt='' className='box-picture' />
                    <div className="logo-description">CSS</div>
                </div>
                <div className="div-category-frontend m-3 p-3 rounded bg-[#EAEAEA] drop-shadow-md">
                    <img src='https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' alt='' className='box-picture' />
                    <div className="logo-description">Bootstrap</div>
                </div>
                <div className="div-category-frontend m-3 p-3 rounded bg-[#EAEAEA] drop-shadow-md">
                    <img src='https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' alt='' className='box-picture' />
                    <div className="logo-description">tailwindcss</div>
                </div>
                <div className="div-category-frontend m-3 p-3 rounded bg-[#EAEAEA] drop-shadow-md">
                    <img src='https://cdn.worldvectorlogo.com/logos/javascript-1.svg' alt='' className='box-picture' />
                    <div className="logo-description">JavaScript</div>
                </div>
                <div className="div-category-frontend m-3 p-3 rounded bg-[#EAEAEA] drop-shadow-md">
                    <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg' alt='' className='box-picture' />
                    <div className="logo-description">React</div>
                </div>
                <div className="div-category-frontend m-3 p-3 rounded bg-[#EAEAEA] drop-shadow-md">
                    <img src='https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' alt='' className='box-picture' />
                    <div className="logo-description">NextJS</div>
                </div>
                <div className="div-category-backend m-3 p-3 rounded bg-[#EAEAEA] drop-shadow-md">
                    <img src='https://cdn.worldvectorlogo.com/logos/nodejs-1.svg' alt='' className='box-picture' />
                    <div className="logo-description">NodeJS</div>
                </div>
                <div className="div-category-backend m-3 p-3 rounded bg-[#EAEAEA] drop-shadow-md">
                    <img src='https://cdn.worldvectorlogo.com/logos/express-109.svg' alt='' className='box-picture' />
                    <div className="logo-description">Express</div>
                </div>
                <div className="div-category-backend m-3 p-3 rounded bg-[#EAEAEA] drop-shadow-md">
                    <img src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' alt='' className='box-picture' />
                    <div className="logo-description">MongoDB</div>
                </div>
                <div className="div-category-tools m-3 p-3 rounded bg-[#EAEAEA] drop-shadow-md">
                    <img src='https://cdn.worldvectorlogo.com/logos/git-icon.svg' alt='' className='box-picture' />
                    <div className="logo-description">Git</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;
