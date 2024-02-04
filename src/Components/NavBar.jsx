import { useState } from "react";
// import Logo from "../Image/Logo.svg"
import stoman from "../Image/stoman.svg";
import darkStoman from "../Image/dark-stoman.svg";
// import {RxHamburgerMenu} from "react-icons/rx"
import { NavLink } from "react-router-dom";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import useDarkmode from "./useDarkmode";



const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [colorTheme, setTheme] = useDarkmode();
 
  const closeModal = () =>{
    const dialog = document.getElementById("my_modal_4");
    dialog.close();
  }
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'frontend',
    description: '',
  });


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form fields
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'This field is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'This field is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Not a valid email address';
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
 
    console.log('Form Data:', formData);
    // If no errors, proceed with API submission
    try {
      console.log('fetching data ...');
      const response = await fetch('http://localhost:80/backend/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
     

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          projectType: 'frontend',
          description: '',
        });
        // const responseData = await response.json(); // Convert the response to JSON
        console.log('Response data:', response);
        setSubmissionStatus('success');
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className={``}>
      <header className="max-w-screen-xl px-4 mx-auto py-10 ">
        <div className="text-white flex justify-between">
          <div>
            {colorTheme === "light" ? (
              <img src={darkStoman} className="md:w-36 w-24 " alt="" />
            ) : (
              <img src={stoman} className="md:w-36 w-24 " alt="" />
            )}
          </div>
          <div
            className={`md:flex hidden gap-7 dark:text-white text-black    text-[19px] font-serif justify-center items-center`}
          >
            <NavLink to="/" className={`cursor-pointer`}>
              Home
            </NavLink>
            <NavLink to="/projects"  className={`cursor-pointer`}>
              Projects
            </NavLink>
            <NavLink to="/about" className={`cursor-pointer`}>
              About Me
            </NavLink>
            <NavLink to="/contact" className={`cursor-pointer`}>
              Contact
            </NavLink>
          </div>
          <div className="flex gap-8 items-center">
            {/* <button className='bg-[#6366f1] md:block hidden hover:bg-[#4446b9] px-5 p-3 font-semibold rounded-lg'>Hire Me</button> */}
            {/* You can open the modal using ID.showModal() method */}
            <button
              className=" bg-[#6366f1] md:block hidden hover:bg-[#4446b9] px-5 p-3 font-semibold rounded-lg"
              onClick={() => window.my_modal_4.showModal()}
            >
              Hire Me
            </button>
            <dialog id="my_modal_4" className="modal">
              <form
                className="modal-box max-h-[100vh]  rounded-lg dark:bg-[#0d2338] p-5 md:p-8 text-black dark:text-white"
              onSubmit={handleSubmit}
             >
                <div className="flex  md:flex-row flex-col justify-between dark:border-b-[#122d42]  border-b my-4">
                  <p className="absolute left-2 top-2 px-5 text-lg font-serif">
                    What project are you looking for?
                  </p>
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
                    ✕
                  </button>
                </div>
                {submissionStatus === 'success' && (
        <div className="text-green-600 text-lg">Message sent successfully, I will get to you in no time!</div>
      )}
      {submissionStatus === 'error' && (
        <div className="text-red-600">Sorry Failed to send message. Please try again.</div>
      )}
                <div className=" grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className=" sm:col-span-2">
                    <label
                      htmlFor="name"
                      className=" block mb-2 text-lg   dark:text-white font-thin"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="dark:bg-[#1e3851] bg-[#F6F7F8]  border dark:border-[#0b243a]   rounded-lg block w-full  p-2 pl-5 "
                      placeholder="Full Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className=" sm:col-span-2">
                    <label
                      htmlFor="name"
                      className=" block mb-2 text-lg   dark:text-white font-thin"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="dark:bg-[#1e3851] bg-[#F6F7F8]  border dark:border-[#0b243a]   rounded-lg block w-full p-2 pl-5 "
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className=" sm:col-span-2">
                    <label
                      htmlFor="name"
                      className=" block mb-2 text-lg   dark:text-white font-thin"
                      
                    >
                      Project Type
                    </label>
                    <select name="projectType" className="dark:bg-[#1e3851] bg-[#F6F7F8]  border dark:border-[#0b243a] rounded-lg block w-full p-2 pl-5 " id="projectType" onChange={handleChange}>
                     <option value="frontend" className="text-sm">Frontend Projects</option>
                     <option value="backend" className="text-sm">Backend Projects</option>
                     <option value="full-stack" className="text-sm">Full-stack Projects</option>
                     
                    </select>
                  </div>
                  <div className=" sm:col-span-2">
                    <label
                      htmlFor="description"
                      className=" block mb-2 text-lg   dark:text-white font-thin"
                    >
                      Details
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="4"
                      placeholder="Details"
                      className=" dark:bg-[#1e3851] bg-[#F6F7F8] pl-5 border dark:border-[#0b243a] block p-2 w-full  rounded-lg focus:ring-primary-500 focus:border-primary-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      onChange={handleChange}
                   ></textarea>
                  </div>
                </div>
            
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-[#6366f1] font-medium p-4 inline-flex items-center px-7  mt-4 sm:mt-6   text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                   name="submit"
                  >
                    Send Message
                  </button>

                  {/* <button type="button" className="bg-[#4B5563] font-medium  inline-flex items-center px-7  mt-6 sm:mt-9   text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Close
                  </button> */}
                </div>
              </form>
              {/* </div> */}
              {/* </form> */}
            </dialog>
            <div
              className="dark:bg-[#1e3851] bg-[#F7F8FC] text-black flex justify-center items-center delay-150 ease-in-out md:w-10 md:h-10 w-7 h-7 rounded-lg"
              onClick={() => {
                setTheme(colorTheme);
              }}
            >
              {colorTheme === "dark" ? (
                <HiOutlineMoon className="text-xl text-[#b9bec4]" />
              ) : (
                <HiOutlineSun className="text-2xl   " />
              )}
            </div>
            <button
              className={`block md:hidden text-3xl dark:text-white text-black`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {toggle ? <BsX className="text-4xl" /> : <BsList />}
            </button>
          </div>
          {/* <img src={Logo}/>  */}
        </div>
      </header>
      <div
        className={` ${
          toggle ? "flex md:hidden" : "hidden"
        } shadow-xl p-5  mb-10 text-xl flex-col md:hidden gap-7 text-left   mx-5`}
      >
        <NavLink
          to=""
          className={`cursor-pointer border-b-2  dark:border-b-[#183b55]`}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={`cursor-pointer border-b-2  dark:border-b-[#183b55]`}
        >
          About Me
        </NavLink>
        <NavLink
          to="/contact"
          className={`cursor-pointer border-b-2  dark:border-b-[#183b55]`}
        >
          Contact
        </NavLink>
        <button className="bg-[#6366f1] w-32 hover:bg-[#4446b9] px-5 p-3 text-white  rounded-sm" onClick={() => window.my_modal_4.showModal()}>
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default NavBar;
