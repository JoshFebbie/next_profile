// import React from "react";
// import Image from "next/image";
// import gptImg from "../public/assets/projects/gptclone.png";
// import { RiRadioButtonFill } from "react-icons/ri";
// import Link from "next/link";

// const gpt = () => {
//   return (
//     <div className="w-full">
//       <div className="w-screen h-[30vh] lg:h-[40vh] relative">
//         <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
//         <Image
//           className="absolute z-1"
//           layout="fill"
//           objectFit="cover"
//           src={gptImg}
//           alt="/"
//         />
//         <div className="absolute top-[70%] max-w-[1240] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
//           <h2 className="py-2 text-white">ChatGPT Replica</h2>
//         </div>
//       </div>

//       <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
//         <div className="col-span-4">
//           <p>Project</p>
//           <h2 className="text-[#398378]">Overview</h2>
//           <p>
//             This app is woven with the finest threads of technology. React, a
//             powerhouse for building dynamic interfaces, lays the foundation. And
//             the OpenAI API, the brain behind the operation, makes natural
//             language processing look effortless.The app's architecture is a duet
//             of simplicity and power. The frontend, crafted with React, provides
//             a clean and engaging user interface. The backend is where the OpenAI
//             API works its magic, turning user inputs into articulate and
//             intelligent text responses. <br />
//             <br />This application excels in delivering a conversational user interface where users can converse, question, and receive answers as if they were talking to a human. With fine-tuned session management to ensure that the context is never lost. And with it's responsive design, the experience is seamless across all devices.
//           </p>
//           <button className="px-8 py-2 mt-4 mr-8 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
//             Demo
//           </button>
//           <button className="px-8 py-2 mt-4 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
//             Code
//           </button>
//         </div>
//         <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 border-2 border-gray-300">
//           <div className="p-2">
//             <p className="text-center font-bold pb-2">Technologies</p>
//             <div className="grid grid-cols-3 md:grid-cols-1">
//               <p className="text-gray-600 py-2 flex items-center">
//                 <RiRadioButtonFill className="pr-2" />
//                 React
//               </p>
//               <p className="text-gray-600 py-2 flex items-center">
//                 <RiRadioButtonFill className="pr-2" />
//                 JavaScript
//               </p>
//               <p className="text-gray-600 py-2 flex items-center">
//                 <RiRadioButtonFill className="pr-2" />
//                 OpenAi
//               </p>
//               <p className="text-gray-600 py-2 flex items-center">
//                 <RiRadioButtonFill className="pr-2" />
//                 CSS
//               </p>
//             </div>
//           </div>
//         </div>
//         <Link href="/#projects">
//           <p className="underline cursor-pointer">Back</p>
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default gpt;

//---------------------------------------------------------------------//

import React, { useState } from "react";
import Image from "next/image";
import gptImg from "../public/assets/projects/gptclone.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const VideoModal = ({ isOpen, videoSource, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 z-50">
      <video width="800" controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={onClose}
        className="text-white px-2 py-2 mt-4 bg-[#398378] rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer"
        // style={{zIndex: 102}}
      >
        Close Modal
      </button>
    </div>
  );
};

const Gpt = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Define the video source URL directly
  const videoSource = "/assets/projects/gpt.mp4";

  const openVideoModal = () => {
    setModalOpen(true);
  };

  const closeVideoModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={gptImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 text-white">GPTclone</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="text-[#398378]">Overview</h2>
          <p>
            This app is woven with the finest threads of technology. React, a
            powerhouse for building dynamic interfaces, lays the foundation. And
            the OpenAI API, the brain behind the operation, makes natural
            language processing look effortless.The app's architecture is a duet
            of simplicity and power. The frontend, crafted with React, provides
            a clean and engaging user interface. The backend is where the OpenAI
            API works its magic, turning user inputs into articulate and
            intelligent text responses. <br />
            <br />
            This application excels in delivering a conversational user
            interface where users can converse, question, and receive answers as
            if they were talking to a human. With fine-tuned session management
            to ensure that the context is never lost. And with it's responsive
            design, the experience is seamless across all devices.
          </p>
          <a onClick={openVideoModal}>
            <button className="px-8 py-2 mt-4 mr-8 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
              Demo
            </button>
          </a>
          <a href="https://github.com/JoshFebbie/GPT-2">
            <button className="px-8 py-2 mt-4  bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 border-2 border-gray-300">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Axios
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                OpenAi
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
      <VideoModal
        isOpen={isModalOpen}
        videoSource={videoSource}
        onClose={closeVideoModal}
      />
    </div>
  );
};

export default Gpt;
