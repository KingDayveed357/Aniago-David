import {NavLink} from 'react-router-dom';
import {useState, useEffect} from 'react' ;
// import developer from '../Image/developer-light.svg'
import developerDark from '../Image/developer-dark.svg'
import Card from '../Components/Card';
import VerticalAlign from "../Image/VerticalAlign.png"
import adroll from "../Image/adRoll.png"
import moderna from "../Image/moderna.png";
import landmark from "../Image/landmark.png"
import geepay from "../Image/geepayUi.png"
import eyga from "../Image/eyga.png"
import { LuSearch } from "react-icons/lu";
// import Typewriter from "../Components/Typewriter";
import {BsArrowDownCircle } from "react-icons/bs";
import Gotop from '../Components/Gotop';
import designer from "../Image/designer.png";

const Home = () => {
  // Add these states in your component
const [searchInput, setSearchInput] = useState('');
const [selectedCategory, setSelectedCategory] = useState('');

// Add this state in your component
// Add this state in your component
const [projects, setProjects] = useState([
  {
    id: 1,
    title: "Moderna Frontend Design Clone",
    img: moderna,
    url: "https://moderna-react-git-main-kingdayveed357.vercel.app/",
    function: "React Application",
    category: "Frontend Projects",
  },
  {
    id: 2,
    title: "AdRoll React Clone",
    img: adroll,
    url: "https://ad-roll-react-98dtyas3k-kingdayveed357.vercel.app/",
    function: "React Application",
    category: "Frontend Projects",
  },
  {
    id: 3,
    title: "VerticalAlign",
    img: VerticalAlign,
    url: "https://example-url.com",  // Replace with the actual URL
    function: "Web Template",
    category: "Other Category",
  },
  {
    id: 4,
    title: "Tutorial Platform",
    img: landmark,
    url: "https://example-url.com",  // Replace with the actual URL
    function: "Full-stack Application",
    category: "Full-stack Projects",
  },
  {
    id: 5,
    title: "Trading Dashboard",
    img: geepay,
    url: "https://example-url.com",  // Replace with the actual URL
    function: "Frontend Design",
    category: "Frontend Projects",
  },
  {
    id: 6,
    title: "YouthHub Connect",
    img: eyga,
    url: "https://example-url.com",  // Replace with the actual URL
    function: "Web Application",
    category: "Full-stack Projects",
  },
  {
    id:7,
    title: "Designer - A react Template",
    img: designer,
    url: "https://react-template-five.vercel.app/", 
    function: "Frontend Template",
    category: "Frontend Projects",
  }
  // Add more projects as needed
]);



const filteredProjects = projects.filter((project) => {
  const titleMatch = project.title.toLowerCase().includes(searchInput.toLowerCase());
  const categoryMatch = selectedCategory === '' || project.category.toLowerCase() === selectedCategory.toLowerCase();
  return titleMatch && categoryMatch;
});
const handleSearchInputChange = (e) => {
  setSearchInput(e.target.value);
};

const handleCategoryChange = (e) => {
  setSelectedCategory(e.target.value);
};
  return (
    <>
    <Gotop/>
    <section className=''>
    <div className='max-w-screen-xl lg:py-0 md:mt-14 lg:mt-0 py-6 mx-auto grid grid-cols-1 lg:grid-cols-12 items-center'>
      <div className='flex flex-col px-5 justify-center items-center lg:items-start md:gap-7 gap-4 lg:col-span-4'>
        <p className={`md:text-4xl text-[#1E3851] dark:text-white text-xl font-bold`}>HI, I AM ANIAGO DAVID</p>
        <p className={`md:text-3xl text-center text-[#9CA3AF] md:text-left text-xl`}>
        {/* <Typewriter text="Full-stack Developer and Design Enthusiast" speed={100} /> */}
          </p>
        <button className='px-5 w-40 lg:w-[56%] md:w-[26%] py-4 md:mt-7 md:p-4 p-2 rounded-md md:text-[17px] justify-center text-[15px] text-[#9CA3AF] shadow-lg bg-[#eef2fe] hover:bg-[#6c63fe] delay-150 ease-in-out hover:text-white font-semibold flex gap-2'>
          <BsArrowDownCircle className='my-auto' /> Download CV
        </button>
      </div>
      <div className={`col-span-8 mt-7 md:mt-0`}>
        {/* {colorTheme === "dark" ? <img src={developerDark} alt=""  /> : <img src={developer} alt=""  />}   */}
        <img src={developerDark} alt="" />
      </div>
    </div>
    </section>

    <section id='projects' className='portfoilo px-5 md:px-5 pt-10 '>
     <div className={`max-w-screen-xl mx-auto  flex flex-col`}>
    <div className={`text-center flex flex-col md:gap-9`}>
     <p className={`text-[39px] text-[#1E3851] dark:text-white font-bold md:text-5xl mt-10`}>Projects Portfolio</p>
     <p className={`text-xl font-light`}>Search projects by title or filter by category</p>
    </div>
    <div className='flex flex-col '>
        <div className={`flex gap-4 md:gap-0   md:flex-row flex-col justify-center items-center md:items-start md:justify-between border-b py-5  dark:border-b-[#122d42]`}>
        <form action="" className='flex justify-center items-center gap-4'>
  {/* ... */}
  <input
    type="search"
    placeholder='Search Projects'
    value={searchInput}
    onChange={handleSearchInputChange}
    className={`dark:bg-[#1e3851] border outline-blue-600 p-2 rounded-lg pl-5`}
  />
</form>

<form action="">
  <select
    type="search"
    className={`dark:bg-[#1e3851] border  p-2 px-12 dark:border-none outline-none rounded-lg pl-5`}
    value={selectedCategory}
    onChange={handleCategoryChange}
  >
    <option value="">All Projects</option>
    <option value="Frontend Projects">Frontend Projects</option>
    <option value="Full-stack Projects">Full-stack Projects</option>
    <option value="Other Category">Other Category</option>
  </select>
</form>

        </div>
        <div className='flex flex-col '>
        <div className='grid md:grid-cols-3 gap-9 grid-cols-1 py-6'>
  {filteredProjects.map((project) => (
    <Card
      key={project.id}
      img={project.img}
      url={project.url}
      title={project.title}
      function={project.function}
    />
  ))}
</div>
        </div>
        <div className='flex justify-center items-center md:pt-16 py-7 md:py-0' >
    <NavLink to="/projects"  className={`bg-[#5f61e9]  text-white px-7 rounded-lg p-3 text-xl font-semibold `}>More Projects</NavLink >
 </div>
    </div>
     </div>
    </section>
    </>
  )
}
export default Home