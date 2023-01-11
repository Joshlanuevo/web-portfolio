import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className='h-screen bg-[#f3f3f3] snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#000000]/80'>
      <Head>
        <title>Josh Ivan</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/3242/3242257.png" />
      </Head>

      <div>
        {/* Header */}
          <Header />

        {/* Hero */}
        <section id='hero' className='snap-start'>
          <Hero />
        </section>

        {/* About */}
        <section id='about' className='snap-center'>
          <About />
        </section>

        {/* Skills */}
        <section id='skills' className='snap-start'>
          <Skills />
        </section>

        {/* Projects */}
        <section id='projects' className='snap-start'>
          <Projects />
        </section>
      </div>
    </div>
  )
}



