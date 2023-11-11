import React from 'react'
import { FaLinkedinIn} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center text-lg'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something remarkable!</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm<span className='text-[#398378]'> Josh</span>
                </h1>
                <h1 className="py-2 text-gray-600">
                    A Full-Stack Web Developer
                </h1>
                <p className='py-4  text-gray-600 max-w-[70%] m-auto'>
                    I'm a full-stack web developer who enjoys building things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href="https://www.linkedin.com/in/josh-febbie-8aa82b248">
                    <div className='p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer'>
                        <FaLinkedinIn/>
                    </div>
                    </a>
                    <a href="https://github.com/JoshFebbie">
                    <div className='p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer'>
                        <FaGithub />
                    </div>
                    </a>
                    <div className='p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer'>
                        <AiOutlineMail />
                    </div>
                    {/* <div className='p-5 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer'>
                        <BsFillPersonLinesFill />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}
export default Main