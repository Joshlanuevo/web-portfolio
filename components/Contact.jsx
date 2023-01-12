import React from 'react';
import userData from '../data/data';

const Contact = () => {
  return (
    <section className='h-screen relative bg-white text-center px-1 py-10'>
        <div className="skill-wrapper relative flex flex-col text-center justify-center items-center mb-10">
            <h3 className='absolute top-20 m-7 uppercase tracking-[20px] text-gray-500 xl:text-xl'>
                Contact Me
            </h3>
            <hr className="relative top-20 w-64 h-1 mb-10 mt-20 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        </div>
        <div className='relative z-10 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto -mt-4 mb-96'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center sm:text-left mb-24">
                <header className='mt-30'>
                    <h1 className="text-black dark:text-gray-50 font-semibold text-4xl mt-10">
                        Get in touch
                    </h1>
                    <p className="text-black text-base dark:text-gray-200 mt-2"> Please contact me by{" "}
                        <a 
                            href={`mailto:${userData.email}`}
                            className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                        >                            
                            email
                        </a> or text messaging.                      
                    </p>
                    <p className="mt-10">lanuevo68@gmail.com</p>
                    <p>+63 9214577200</p>
                </header>
            </div>
        </div>
    </section>
  )
}

export default Contact;