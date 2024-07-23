import React from 'react'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
      <div className="home w-full h-screen md:pt-12 pt-8 dark:bg-black bg-[#dadada]">
        <Loader />
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default Home
