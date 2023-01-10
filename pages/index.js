import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className='h-screen bg-[#f3f3f3] snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0'>
      <Head>
        <title>Josh Ivan</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/3242/3242257.png" />
      </Head>

      <div className=''>
        {/* Header */}
          <Header />

        {/* Hero */}
        <section id='hero' >
          <Hero />
        </section>

        {/* About */}
        <section id='about' >
          <About />
        </section>

        {/* Skills */}
        <section id='skills' >
          <Skills />
        </section>
      </div>
    </div>
  )
}


