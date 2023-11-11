// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { HiOutlineChevronDoubleUp } from "react-icons/hi";

// const Contanct = () => {
//   return (
//     <div id="contact" className="w-full lg:h-screen">
//       <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
//         <p className="text-xl tracking-widest uppercase text-[#398378]">
//           Contact
//         </p>
//         <h2 className="py-4">Get in Touch</h2>
//         <div className="grid lg:grid-cols-5 gap-8">
//           {/* left side */}
//           <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 border-2 border-gray-300">
//             <div className="lg:p-4 h-full rounded-xl">
//               <div>
//                 <img
//                   className="rounded-xl hover:scale-105 ease-in duration-300"
//                   src="/assets/contact.jpg"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <h2 className="py-2 text-[#398378]">Josh Febbie</h2>
//                 <p className="text-gray-500">Full-Stack Developer</p>
//                 <p className="py-4 text-gray-500">
//                   I am available for freelance or full-time positions. Contact
//                   me and let's talk
//                 </p>
//               </div>
//               <div>
//                 <p className="uppercase pt-8">Connect With Me</p>
//                 <div className="flex items-center justify-between py-4">
//                   <div className="p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
//                     <FaLinkedinIn />
//                   </div>
//                   <div className="p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
//                     <FaGithub />
//                   </div>
//                   <div className="p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
//                     <AiOutlineMail />
//                   </div>
//                   <div className="p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
//                     <BsFillPersonLinesFill />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* right side */}

//           <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 border-2 border-gray-300 rounded-xl lg:p-4">
//             <div className="p-4">
//             <form method="POST" action="https://getform.io/f/81281fee-3766-46b4-9f60-74ab9c12b058">
//               <div className="grid md:grid-cols-2 gap-4 w-full py-2  border-gray-300">
//                 <div flex flex-col>
//                   <label className="uppercase font-bold text-sm py-2 text-[#398378]">Name</label>
//                   <input className="w-full p-2 rounded-lg border-2 border-gray-300"

//                   />
//                 </div>
//                 <div flex flex-col>
//                   <label className="uppercase font-bold text-sm py-2 text-[#398378]">Phone Number</label>
//                   <input className="w-full p-2 rounded-lg border-2 border-gray-300"
//                          type="text"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col py-2">
//                 <label className="uppercase font-bold text-sm py-2 text-[#398378]">Email</label>
//                 <input className="w-full p-2 rounded-lg border-2 border-gray-300"
//                          type="email"
//                   />
//               </div>
//               <div className="flex flex-col py-2">
//                 <label className="uppercase font-bold text-sm py-2 text-[#398378]">Subject</label>
//                 <input className="w-full p-2 rounded-lg border-2 border-gray-300"
//                          type="text"
//                   />
//               </div>
//               <div className="flex flex-col py-2">
//                 <label className="uppercase font-bold text-sm py-2 text-[#398378]">Message</label>
//                 <textarea className="w-full p-2 rounded-lg border-2 border-gray-300"
//                  rows="10"
//                  name="message"
//                  ></textarea>
//               </div>
//               {/* <button className="bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-105 transition duration-500 ease-in-out cursor-pointer w-full p-4 mt-4" >Send Message</button> */}
//               <button className="bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-105 active:bg-[#357a6b] active:scale-100 transition duration-300 ease-in-out cursor-pointer w-full p-2 mt-4">
//   Send Message
// </button>
//             </form>
//            </div>
//           </div>
//         </div>
//           <div className="flex justify-center py-12">
//             <Link href="/">
//               <div className="p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
//                 <HiOutlineChevronDoubleUp className="text-white" size={20} />
//               </div>
//             </Link>
//           </div>
//       </div>
//     </div>
//   );
// };
// export default Contanct;

//------------------------------------------------------//




import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contanct = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#398378]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left side */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 border-2 border-gray-300">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/contact.jpg"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2 text-[#398378]">Josh Febbie</h2>
                <p className="text-gray-500">Full-Stack Developer</p>
                <p className="py-4 text-gray-500">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a href="https://www.linkedin.com/in/josh-febbie-8aa82b248">
                  <div className="p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                  </a>
                  <a href="https://github.com/JoshFebbie">
                  <div className="p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
                    <FaGithub />
                  </div>
                  </a>
                  <div className="p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 border-2 border-gray-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                method="POST"
                action="https://getform.io/f/81281fee-3766-46b4-9f60-74ab9c12b058"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2  border-gray-300">
                  <div flex flex-col>
                    <label className="uppercase font-bold text-sm py-2 text-[#398378]">
                      Name
                    </label>
                    <input className="w-full p-2 rounded-lg border-2 border-gray-300"
                    type="text"
                    name="name" />
                  </div>
                  <div flex flex-col>
                    <label className="uppercase font-bold text-sm py-2 text-[#398378]">
                      Phone Number
                    </label>
                    <input
                      className="w-full p-2 rounded-lg border-2 border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase font-bold text-sm py-2 text-[#398378]">
                    Email
                  </label>
                  <input
                    className="w-full p-2 rounded-lg border-2 border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase font-bold text-sm py-2 text-[#398378]">
                    Subject
                  </label>
                  <input
                    className="w-full p-2 rounded-lg border-2 border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase font-bold text-sm py-2 text-[#398378]">
                    Message
                  </label>
                  <textarea
                    className="w-full p-2 rounded-lg border-2 border-gray-300"
                    rows="10"
                    type="text"
                    name="message"
                  ></textarea>
                </div>
                {/* <button className="bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-105 transition duration-500 ease-in-out cursor-pointer w-full p-4 mt-4" >Send Message</button> */}
                <button className="bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-105 active:bg-[#357a6b] active:scale-100 transition duration-300 ease-in-out cursor-pointer w-full p-2 mt-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
              <HiOutlineChevronDoubleUp className="text-white" size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contanct;





//------------------------------------------------------------------------------//



// import React, { useState } from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { HiOutlineChevronDoubleUp } from "react-icons/hi";

// const Contact = () => {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevFormData => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://getform.io/f/{your-unique-getform-endpoint}', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Clear the form fields by resetting the formData state
//         setFormData({
//           name: '',
//           phone: '',
//           email: '',
//           subject: '',
//           message: '',
//         });
//         // Here you can also implement any success message or logic you'd like to show the user
//       } else {
//         // Handle any errors here
//         console.error('Form submission failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('There was an error submitting the form:', error);
//     }
//   };

//   return (
//     <div id="contact" className="w-full lg:h-screen">
//       {/* ... rest of the component remains the same */}
//       <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
//         <div className="p-4">
//           <form
//             onSubmit={handleSubmit} // Add the onSubmit event handler here
//           >
//             {/* ... */}
//             <div className="grid md:grid-cols-2 gap-4 w-full py-2">
//               {/* ... other form fields */}
//               <input
//                 className="border-2 border-gray-300 p-2 rounded-lg w-full"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {/* ... repeat for each input with value and onChange */}
//               {/* ... */}
//             </div>
//             {/* ... */}
//             <button
//               type="submit"
//               className="bg-[#398378] text-white rounded-full shadow-lg shadow-gray-400 hover:bg-[#3fa38c] p-2 mt-4 w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//       {/* ... */}
//     </div>
//   );
// };

// export default Contact;

