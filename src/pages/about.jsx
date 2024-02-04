// import React from 'react'
import Gotop from '../Components/Gotop'
import man from '../Image/man.jpeg'
import { useEffect, useState } from 'react'

const About = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [githubStars, setGithubStars] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);


  useEffect(() => {
   const targetYearsOfExperience = 3;
   const targetGithubStars = 20;
   const targetPositiveFeedback = 92;
   const targetProjectsCompleted = 85;
    
    const interval = setInterval(() => {
            setYearsOfExperience(prevValue =>
              prevValue < targetYearsOfExperience ? prevValue + 1 : prevValue
            );
            setGithubStars(prevValue =>
              prevValue < targetGithubStars ? prevValue + Math.ceil(targetGithubStars / 100) : prevValue
            );
            setPositiveFeedback(prevValue =>
              prevValue < targetPositiveFeedback ? prevValue + 1 : prevValue
            );
            setProjectsCompleted(prevValue =>
              prevValue < targetProjectsCompleted ? prevValue + 1 : prevValue
            );

      if (
        yearsOfExperience >= targetYearsOfExperience &&
        githubStars >= targetGithubStars &&
        positiveFeedback >= targetPositiveFeedback &&
        projectsCompleted >= targetProjectsCompleted
      ) {
        clearInterval(interval);
      }
    }, 20);
  },[] ); 
  return (
    <>
    <Gotop/>
    <section className={`max-w-screen-xl gap-10 flex flex-col md:flex-row px-4 mx-auto py-8`}>
        <img src={man} className={`h-80 rounded-lg`} alt="" />
   <div className='text-lg flex flex-col gap-4 md:my-auto'>
   <p className='flex flex-col gap-3'> <span className='text-2xl font-semibold '>About Me</span>
   Hello! I'm Aniago David, an experienced full-stack developer proficient in both frontend and backend technologies. My expertise ranges from crafting visually appealing user interfaces to engineering robust backend systems. Beyond coding, I'm a passionate design enthusiast, blending aesthetics with functionality.

Driven by curiosity, I thrive on staying at the forefront of technology, always eager to explore new frameworks and design trends. I believe great design enhances user experiences, and my goal is to strike the perfect balance between form and function.

Open to exciting opportunities and collaborations, I'm here to transform your ideas into extraordinary digital experiences. Feel free to explore my portfolio and connect with me if you're looking for a collaborator with a blend of technical prowess and design sensibility. Let's craft something remarkable together!</p>
    {/* <p className='flex flex-col'> <span className='text-2xl font-semibold '>Technical Expertise</span>
    In the world of coding, I navigate effortlessly through the complexities of frontend technologies, crafting beautiful and intuitive user interfaces. My expertise extends to the backend, where I build robust and scalable systems that power the functionality of web applications.</p>
    <p className='flex flex-col'> <span className='text-2xl font-semibold '>Design Enthusiast</span>
    Beyond the lines of code, I am a design enthusiast. I believe that great design is not just visually appealing but also enhances the user experience. Whether it's creating pixel-perfect layouts or selecting the perfect color palette, I strive to bring aesthetics and functionality together.</p>
    <p className='flex flex-col'> <span className='text-2xl font-semibold '>What Drives Me</span>
    I am fueled by a constant curiosity and a passion for staying on the cutting edge of technology. The ever-evolving nature of web development excites me, and I am always eager to explore new frameworks, languages, and design trends.</p>
    <p className='flex flex-col'> <span className='text-2xl font-semibold '>Let's Collaborate</span>
    I am open to exciting opportunities and collaborations. Whether you have a project that needs technical expertise, a creative design vision, or both – I'm ready to bring your ideas to life. Let's connect and build something amazing together.

Feel free to explore my portfolio, and don't hesitate to reach out for inquiries, collaborations, or just a friendly chat about all things tech and design!</p> */}
   </div>
    </section>

    <main className={`dark:bg-[#1e3851] bg-[#F7F8FC] xl:px-0 lg:px-7 md:px-4 mt-14`}>
   <div className={`max-w-screen-xl py-28 md:py-16 flex justify-between items-center md:items-start gap-20 md:gap-0  flex-col md:flex-row mx-auto`}>
    <div className={`flex flex-col   gap-2 `}>
      <p className={` text-center text-4xl text-[#1e3851] dark:text-white font-bold`}>{yearsOfExperience}+</p>
      <p className={` text-lg font-thin`}>Years of experience</p>
    </div>
     <div className={`flex flex-col  gap-2 `}>
      <p className={` text-center text-4xl text-[#1e3851] dark:text-white font-bold`}>{githubStars}k+</p>
      <p className={` text-lg font-thin`}>Stars on GitHub</p>
    </div>
     <div className={`flex flex-col  gap-2 `}>
      <p className={` text-center text-4xl text-[#1e3851] dark:text-white font-bold`}>{positiveFeedback}%</p>
      <p className={` text-lg font-thin`}>Positive feedback</p>
    </div>
     <div className={`flex flex-col  gap-2 `}>
      <p className={` text-center text-4xl text-[#1e3851] dark:text-white font-bold`}>{projectsCompleted}%</p>
      <p className={` text-lg font-thin`}>Projects completed</p>
    </div>
   </div>
    </main>
    </>
  )
}
export default About ;