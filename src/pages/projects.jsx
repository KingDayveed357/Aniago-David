import Card from '../Components/Card';
import VerticalAlign from "../Image/VerticalAlign.png"
import adroll from "../Image/adRoll.png"
// import project from "../Image/project-ui.jpg"
import landmark from "../Image/landmark.png"
import geepay from "../Image/geepayUi.png"
import eyga from "../Image/eyga.png"
import { LuSearch } from "react-icons/lu";
import Gotop from '../Components/Gotop';
import moderna from "../Image/moderna.png";

const Projects = () => {
  return (
   <>
   <Gotop/>
    <section className='portfoilo px-5 md:px-5 pt-10 '>
     <div className={`max-w-screen-xl mx-auto  flex flex-col`}>
    <div className={`text-center flex flex-col md:gap-9`}>
     <p className={`text-[39px] text-[#1E3851] dark:text-white font-bold md:text-5xl mt-10`}>Projects Portfolio</p>
     <p className={`text-xl font-light`}>Search projects by title or filter b y category</p>
    </div>
    <div className='flex flex-col '>
        <div className={`flex gap-4 md:gap-0 md:flex-row flex-col justify-center items-center md:items-start md:justify-between border-b py-5  dark:border-b-[#122d42]`}>
         <form action="" className='flex justify-center items-center gap-4'>
         <div className='dark:bg-[#1e3851] bg-[#F7F8FC] flex justify-center items-center delay-150 ease-in-out md:w-10 md:h-10 w-7 h-7 rounded-lg'>
         <LuSearch className='dark:bg-[#1e3851] text-2xl'/>
         </div>
            <input type="search" placeholder='Search Projects' className={`dark:bg-[#1e3851] border outline-blue-600 p-2 rounded-lg pl-5`} />
         </form>

          <form action="">
            {/* <select name="" id=""> */}
            <select type="search"  className={`dark:bg-[#1e3851] border  p-2 px-12 dark:border-none outline-none rounded-lg pl-5 `} >
            <option value="">All Projects</option>
            <option value="">Web Projects</option>
            <option value="">Branding</option>
            </select>
         </form>
        </div>
        <div className='flex flex-col '>
         <div className='grid md:grid-cols-3 gap-9   grid-cols-1 py-6'>
  <Card img={moderna} url={`https://moderna-react-git-main-kingdayveed357.vercel.app/`} title="Moderna Frontend Design Clone" function="React Application"/>
  <Card img={adroll} ul={`https://ad-roll-react-98dtyas3k-kingdayveed357.vercel.app/`} title="AdRoll React Clone" function="React Application"/>
  <Card img={VerticalAlign} title="VerticalAlign" function="Web Template"/>
        </div>
           <div className='grid md:grid-cols-3 gap-9 grid-cols-1  py-6'>
    <Card img={landmark} title="Tutorial Platform " function="Full-stack Projects"/>
  <Card img={geepay} title="Trading Dashboard" function="Frontend Design"/>
  <Card img={eyga} title="Apple Design System " function="Web Application"/>
    </div>
        </div>
        {/* <div className='flex justify-center items-center md:pt-16 py-7 md:py-0' >
    <button className={`bg-[#5f61e9]  text-white px-7 rounded-lg p-3 text-xl font-semibold `}>More Projects</button>
 </div> */}
    </div>
     </div>
    </section>
   </>
  )
}

export default Projects
