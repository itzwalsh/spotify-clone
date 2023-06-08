import React from 'react'

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6 text-white'>
      <h1 className='text-4xl md:text-6xl mb-4'>Zack Walsh</h1>
      <img src="https://i.imgur.com/rFip5D7.jpeg" alt="Me" className='w-48 rounded-full border-2 mb-4'/>
      <p className='text-base md:text-xl mb-4 font-light'>Software Engineer / Web Developer</p>
      <p className='text-sm max-w-xl mb-12'>Hi there, I'm a 23 year old Software Developer with a passion for technology and a strong drive for continuous learning. I have a keen eye for detail and a commitment to delivering high-quality code. With a background in computer science, I have honed my skills in various programming languages and am always eager to expand my knowledge by learning new technologies/stacks. I thrive in fast-paced environments and take great pride in developing intuitive and user-friendly solutions.</p>
    </div>
  )
}

export default Intro