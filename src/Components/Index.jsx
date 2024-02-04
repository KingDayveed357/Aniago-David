// import React from 'react'
import developer from "../Image/developer-light.svg";
import developerDark from "../Image/developer-dark.svg";
import Card from "./Card";
import google from "../Image/google.jpg";
import phoenix from "../Image/phoenix.jpg";
import project from "../Image/project-ui.jpg";
import cloud from "../Image/cloud.jpg";
import react from "../Image/react-social.jpg";
import apple from "../Image/apple.jpg";
import { LuSearch } from "react-icons/lu";
import useDarkmode from "./useDarkmode";
import { BsArrowDownCircle } from "react-icons/bs";

const Index = () => {
  useDarkmode();
  const [colorTheme] = useDarkmode();
  return (
    <>
      <section className="">
        <div className="max-w-screen-xl md:py-0 py-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-center">
          <div className="flex flex-col px-5 justify-center items-center md:items-start md:gap-7 gap-4 lg:col-span-4">
            <p
              className={`md:text-4xl text-[#1E3851] dark:text-white text-xl font-bold`}
            >
              HI, IAM STOMAN
            </p>
            <p
              className={`md:text-3xl text-center text-[#9CA3AF] md:text-left text-xl`}
            >
              A Full-Stack Developer & Design Enthusiast
            </p>
            <button className="px-5 w-36 md:w-[56%] mt-7 md:p-4 p-2 rounded-md md:text-[17px] justify-center text-[15px] text-[#9CA3AF] shadow-lg bg-[#eef2fe] hover:bg-[#6c63fe] delay-150 ease-in-out hover:text-white font-semibold flex gap-2">
              {" "}
              <BsArrowDownCircle className="my-auto" /> Download CV
            </button>
          </div>
          <div className={`col-span-8 `}>
            {colorTheme === "dark" ? (
              <img src={developerDark} alt="" />
            ) : (
              <img src={developer} alt="" />
            )}
            {/* <img src={developerDark} alt=""  />  */}
          </div>
        </div>
      </section>

      <section className="portfoilo px-5 md:px-0 pt-10 ">
        <div className={`max-w-screen-xl mx-auto  flex flex-col`}>
          <div className={`text-center flex flex-col md:gap-9`}>
            <p
              className={`text-[39px] text-[#1E3851] dark:text-white font-bold md:text-5xl mt-10`}
            >
              Projects Portfolio
            </p>
            <p className={`text-xl font-light`}>
              Search projects by title or filter by category
            </p>
          </div>
          <div className="flex flex-col ">
            <div
              className={`flex gap-4 md:gap-0   md:flex-row flex-col justify-center items-center md:items-start md:justify-between border-b py-5  dark:border-b-[#122d42]`}
            >
              <form
                action=""
                className="flex justify-center items-center gap-4"
              >
                <div className="dark:bg-[#1e3851] bg-[#F7F8FC] flex justify-center items-center delay-150 ease-in-out md:w-10 md:h-10 w-7 h-7 rounded-lg">
                  <LuSearch className="dark:bg-[#1e3851] text-2xl" />
                </div>
                <input
                  type="search"
                  placeholder="Search Projects"
                  className={`dark:bg-[#1e3851] border outline-blue-600 p-2 rounded-lg pl-5`}
                />
              </form>

              <form action="">
                {/* <select name="" id=""> */}
                <select
                  type="search"
                  className={`dark:bg-[#1e3851] border  p-2 px-12 dark:border-none outline-none rounded-lg pl-5 `}
                >
                  <option value="">All Projects</option>
                  <option value="">Web Projects</option>
                  <option value="">Branding</option>
                </select>
              </form>
            </div>
            <div className="flex flex-col ">
              <div className="grid md:grid-cols-3 gap-9   grid-cols-1 py-6">
                <Card
                  img={google}
                  title="Google Health platform "
                  function="Web Application"
                />
                <Card
                  img={phoenix}
                  title="Phoenix Digital Agency "
                  function="Mobile Application"
                />
                <Card
                  img={project}
                  title="Project Management UI"
                  function="UI/UX Design"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-9 grid-cols-1  py-6">
                <Card
                  img={cloud}
                  title="Cloud Storage platform "
                  function="UI/UX Design"
                />
                <Card
                  img={react}
                  title="Recat Social App"
                  function="Mobile Application"
                />
                <Card
                  img={apple}
                  title="Apple Design System "
                  function="Web Application"
                />
              </div>
            </div>
            <div className="flex justify-center items-center md:pt-16 py-7 md:py-0">
              <button
                className={`bg-[#5f61e9]  text-white px-7 rounded-lg p-3 text-xl font-semibold `}
              >
                More Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Index;
