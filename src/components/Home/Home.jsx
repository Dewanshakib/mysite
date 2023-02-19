import React from 'react'
import About from '../About/About'
import Intro from '../Intro/Intro'
import Navbar from '../Navbar/Navbar'
import Project from '../Project/Project'

const Home = () => {
  return (
    <>
        <div className='font-sans px-8 md:px-20 lg:px-40'>
          <Navbar/>
          <Intro/>
          <About/>
          <Project/>
        </div>
    </>
  )
}

export default Home