import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className='h-screen'>
      <Head>
        <title>Josh Ivan</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/3242/3242257.png" />
      </Head>

      <div className='bg-[#F5F5F5] h-screen'>
        {/* Header */}
          <Header />
        {/* Hero */}
        <section>
          <Hero />
        </section>
      </div>
    </div>
  )
}
