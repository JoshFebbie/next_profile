// import React from "react";
// import Image from "next/image";
// import movieImg from "../public/assets/projects/movies.png";
// import { RiRadioButtonFill } from "react-icons/ri";
// import Link from "next/link";

// const movies = () => {
//   return (
//     <div className="w-full">
//       <div className="w-screen h-[30vh] lg:h-[40vh] relative">
//         <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
//         <Image
//           className="absolute z-1"
//           layout="fill"
//           objectFit="cover"
//           src={movieImg}
//           alt="/"
//         />
//         <div className="absolute top-[70%] max-w-[1240] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
//           <h2 className="py-2 text-white">Movie streaming App</h2>
//         </div>
//       </div>

//       <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
//         <div className="col-span-4">
//           <p>Project</p>
//           <h2 className="text-[#398378]">Overview</h2>
//           <p>
//             Built with the dynamic capabilities of React, the versatility of
//             JavaScript, the styling finesse of CSS, and the reliable data
//             fetching provided by Axios, this app is a testament to what modern
//             web technology can accomplish. Together, these tools weave a
//             tapestry of technical excellence that supports a premium streaming
//             experience.<br/><br />Discoverability is key in this app. Users can
//             explore genres, search for titles, and receive recommendations
//             tailored to their tastes. Each movie comes with detailed
//             descriptions, ratings, and trailers, ensuring that you're
//             well-informed before diving into your next watch. Our responsive
//             design ensures that whether on a phone, tablet, or desktop, your
//             viewing experience remains uninterrupted and adaptable to your
//             lifestyle.
//           </p>
//           <button className="px-8 py-2 mt-4 mr-8 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
//             Demo
//           </button>
//           <a href="https://github.com/JoshFebbie/netflixclone">
//           <button className="px-8 py-2 mt-4 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
//             Code
//           </button>
//           </a>
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
//                 Axios
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
// export default movies;

//---------------------------------------------------------///

// import React, { useState} from "react";
// import Image from "next/image";
// import movieImg from "../public/assets/projects/movies.png";
// import { RiRadioButtonFill } from "react-icons/ri";
// import Link from "next/link";
// import Flix from "../public/assets/projects/flix.mp4";

// const VideoModal = ({ isOpen, videoSource, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
//       <video width="800" controls>
//         <source src={videoSource} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <button onClick={onClose} className="absolute top-4 right-4 text-white">
//         Close
//       </button>
//     </div>
//   );
// };

// const movies = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [videoSource, setVideoSource] = useState(null);

//     const openVideoModal = (source) => {
//       setVideoSource(source);
//       setModalOpen(true);
//     };

//     const closeVideoModal = () => {
//       setModalOpen(false);
//       setVideoSource(null);
//     };
//   return (
//     <div className="w-full">
//       <div className="w-screen h-[30vh] lg:h-[40vh] relative">
//         <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
//         <Image
//           className="absolute z-1"
//           layout="fill"
//           objectFit="cover"
//           src={movieImg}
//           alt="/"
//         />
//         <div className="absolute top-[70%] max-w-[1240] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
//           <h2 className="py-2 text-white">Movie streaming App</h2>
//         </div>
//       </div>

//       <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
//         <div className="col-span-4">
//           <p>Project</p>
//           <h2 className="text-[#398378]">Overview</h2>
//           <p>
//             Built with the dynamic capabilities of React, the versatility of
//             JavaScript, the styling finesse of CSS, and the reliable data
//             fetching provided by Axios, this app is a testament to what modern
//             web technology can accomplish. Together, these tools weave a
//             tapestry of technical excellence that supports a premium streaming
//             experience.<br/><br />Discoverability is key in this app. Users can
//             explore genres, search for titles, and receive recommendations
//             tailored to their tastes. Each movie comes with detailed
//             descriptions, ratings, and trailers, ensuring that you're
//             well-informed before diving into your next watch. Our responsive
//             design ensures that whether on a phone, tablet, or desktop, your
//             viewing experience remains uninterrupted and adaptable to your
//             lifestyle.
//           </p>
//           <a onClick={() => openVideoModal(Flix)}>
//           <button className="px-8 py-2 mt-4 mr-8 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
//             Demo
//           </button>
//           </a>
// <a href="https://github.com/JoshFebbie/netflixclone">
// <button className="px-8 py-2 mt-4 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
//   Code
// </button>
// </a>
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
//                 Axios
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
// export default movies;

//---------------------------------------------------------///

import React, { useState } from "react";
import Image from "next/image";
import movieImg from "../public/assets/projects/movies.png";
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

const Movies = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Define the video source URL directly
  const videoSource = "/assets/projects/flix.mp4";

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
          src={movieImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 text-white">Movie streaming App</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="text-[#398378]">Overview</h2>
          <p>
            Built with the dynamic capabilities of React, the versatility of
            JavaScript, the styling finesse of CSS, and the reliable data
            fetching provided by Axios, this app is a testament to what modern
            web technology can accomplish. Together, these tools weave a
            tapestry of technical excellence that supports a premium streaming
            experience.
            <br />
            <br />
            Discoverability is key in this app. Users can explore genres, search
            for titles, and receive recommendations tailored to their tastes.
            Each movie comes with detailed descriptions, ratings, and trailers,
            ensuring that you're well-informed before diving into your next
            watch. Our responsive design ensures that whether on a phone,
            tablet, or desktop, your viewing experience remains uninterrupted
            and adaptable to your lifestyle.
          </p>
          <a onClick={openVideoModal}>
            <button className="px-8 py-2 mt-4 mr-8 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
              Demo
            </button>
          </a>
          <a href="https://github.com/JoshFebbie/netflixclone">
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

export default Movies;
