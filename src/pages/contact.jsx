import { useState } from 'react';
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import Gotop from "../Components/Gotop";

const Contact = () => {
    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
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
        const response = await fetch('http://localhost:80/backend/contact.php', {
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
            subject: '',
            message: '',
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
  
  return(
   <>
   <Gotop/>
   <section className='py-16'>
    <div className='max-w-screen-xl md:px-7 px-3 mx-auto gap-4 md:gap-20 lg:grid-cols-12 grid grid-cols-1 md:grid-cols-2'>
 <div className='md:col-span-6  mt-10 justify-center px-6 text-lg gap-5 md:hidden flex flex-col'>
 <p className={`text-2xl mb-4`}>Contact details</p>
 <p className="flex gap-3"> <FiMapPin className="my-auto text-2xl text-[#7C838F]"/> Your Address, Your City, Your Country</p>
 <p className="flex gap-3"> <FaRegEnvelope className="my-auto text-2xl text-[#7C838F]"/>email@domain.com</p>
 <p className="flex gap-3"> <FiPhone className="my-auto text-2xl text-[#7C838F]"/>555 8888 888</p>
  </div>

   <div className={`dark:bg-[#112d43] shadow-xl rounded-lg p-10 md:col-span-7`}>
      <h2 className=" mb-8 text-2xl font-medium   dark:text-white">Contact Form</h2>
      <form action="#" className='' onSubmit={handleSubmit}>
     {submissionStatus === 'success' && (
        <div className="text-green-600 text-lg">Message sent successfully, I will get to you in no time!</div>
      )}
      {submissionStatus === 'error' && (
        <div className="text-red-600">Sorry Failed to send message. Please try again.</div>
      )}
          <div className=" grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label htmlFor="name" className=" block mb-2 text-lg   dark:text-white">Full Name</label>
                  <input onChange={handleChange} type="text" required name="name" id="name" className="dark:bg-[#1e3851] bg-[#F6F7F8]  border dark:border-[#0b243a]   rounded-lg block w-full p-3 pl-5 " placeholder="Your Name" required="" />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="email" className=" block mb-2 text-lg   dark:text-white">Email</label>
                  <input onChange={handleChange} type="email" required name="email" id="email" className="dark:bg-[#1e3851] bg-[#F6F7F8]  border dark:border-[#0b243a]   rounded-lg block w-full p-3 pl-5 " placeholder="Your email" required="" />
              </div>
             <div className=" sm:col-span-2">
                  <label htmlFor="subject" className=" block mb-2 text-lg   dark:text-white">Subject</label>
                  <input  onChange={handleChange} type="text" required name="subject" id="subject" className="dark:bg-[#1e3851] bg-[#F6F7F8]  border dark:border-[#0b243a]   rounded-lg block w-full p-3 pl-5 " placeholder="Subject" required="" />
              </div>
              <div className=" sm:col-span-2">
                  <label htmlFor="message" className=" block mb-2 text-lg   dark:text-white">Message</label>
                  <textarea  onChange={handleChange} required name='message' id="message" rows="7" className=" dark:bg-[#1e3851] bg-[#F6F7F8] pl-5 border dark:border-[#0b243a]  block p-3 w-full    rounded-lg focus:ring-primary-500 focus:border-primary-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" ></textarea>
              </div>
          </div>    
          <button type="submit" className="bg-[#6366f1] font-medium p-4 inline-flex items-center px-7  mt-4 sm:mt-6   text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Send Message
          </button>
      </form>
  </div>

 <div className='md:col-span-5  mt-10 justify-center px-6 text-lg gap-5 hidden md:flex flex-col'>
 <p className={`text-2xl mb-4`}>Contact details</p>
 <p className="flex gap-3"> <FiMapPin className="my-auto text-2xl text-[#7C838F]"/> Port-harcourt, Rivers state, Nigeria.</p>
 <p className="flex gap-3"> <FaRegEnvelope className="my-auto text-2xl text-[#7C838F]"/>davidaniago@gmail.com</p>
 <p className="flex gap-3"> <FiPhone className="my-auto text-2xl text-[#7C838F]"/>+2347086293912</p>
  </div>
    </div>
   </section>
   </>
  )
}

export default Contact