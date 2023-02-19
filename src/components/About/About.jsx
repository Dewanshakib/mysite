import React from 'react'

const About = () => {
  return (
    <div className='py-8'>
      <div className="flex flex-col items-center py-4">
        <h1 className='text-3xl py-2 md:text-4xl lg:text-[42px]'>About</h1>
        <hr className='bg-gray-700 w-2/5 h-[3px] md:w-1/5 lg:w-1/5'/>
      </div>

      <div className="w-full h-auto px-10">
        <p className='py-4 leading-9 text-lg text-gray-800 md:leading-10 md:text-xl lg:text-[22px]'>Hi,I am a professional web developer.I am from Dhaka,Bangladesh.I am studing at college.My aim is be an sussesfull web developer.I have been coding since 1 year.I am excited to showcase my portfolio, which features some of my best work.I have maked many projects related to HTML,CSS and Java Script.Now i am getting hands on React (Java Script Library).If you have a project in mind or would like to learn more about my work, feel free to contact me using my given informations above.I look forward to hearing from you and working together to bring your ideas to life.</p>
      </div>
    </div>
  )
}

export default About