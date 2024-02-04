// import React from 'react'
// import { HiOutlineSun } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { LuLinkedin } from "react-icons/lu";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  return (
    <div>
    
        <section className='pb-10 mt-32 '>
         <div className='max-w-screen-xl  mx-auto border-t pt-12 md:pt-20 dark:border-t-[#122d42] flex flex-col'>
           <div className='flex flex-col gap-5 md:gap-7'>
         <p className='md:text-4xl text-3xl text-[#1e3851] dark:text-white font-bold text-center'>Follow me</p>
         <div className='flex mx-auto md:gap-12 gap-4'>
          <div className='dark:bg-[#1e3851] bg-[#F9FAFB] flex items-center text-4xl justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg'>
           <TbWorld className='dark:bg-[#1e3851] text-[#9CA3AF] hover:text-[#5F61E9] '/>
          </div>
         <a target="_blank" rel="noreferrer" href="https://github.com/KingDayveed357" className='dark:bg-[#1e3851] hover:cursor-pointer bg-[#F9FAFB]  flex items-center text-4xl justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg'>
           <FaGithub  className='dark:bg-[#1e3851] text-[#9CA3AF] hover:text-[#5F61E9] '/>
          </a>
           
          
         <a target="_blank" rel="noreferrer" href="https://twitter.com/@AniagoD" className='dark:bg-[#1e3851] hover:cursor-pointer bg-[#F9FAFB]  flex items-center text-4xl justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg'>
           <SlSocialTwitter className='dark:bg-[#1e3851] text-[#9CA3AF] hover:text-[#5F61E9] '/>
          </a>
           
          
         <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/david-aniago-4889aa28a" className='dark:bg-[#1e3851] hover:cursor-pointer bg-[#F9FAFB]  flex items-center text-4xl justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg'>
           <LuLinkedin className='dark:bg-[#1e3851] text-[#9CA3AF] hover:text-[#5F61E9] '/>
          </a>
           
          
         <div className='dark:bg-[#1e3851] bg-[#F9FAFB]  flex items-center text-4xl justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg'>
           <SlSocialYoutube className='dark:bg-[#1e3851] text-[#9CA3AF] hover:text-[#5F61E9] '/>
          </div>
           
          
         </div>
           </div>
           <div className='md:mt-20 mt-12 flex justify-center px-4 md:px-0'>
          <p className='text-lg text-center'>© 2023 <a className='hover:underline text-[#1e3851] dark:text-white font-semibold'>React & Tailwind CSS Portfolio.</a> Developed by KING DAY_VEED 👑 </p>
         </div>
         </div>
        </section>
    </div>
  )
}

export default Footer