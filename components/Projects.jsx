import React from 'react'
import Image from 'next/image'
import blogImg from '../public/assets/projects/blog.jpg'
import Link from 'next/link'


const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#398378]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#398378] to-[#3fa38c]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={blogImg} alt="/" />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-white text-2xl tracking-wider text-center'>Fly-Fishing Blog</h3>
                        <p className='pb-4 pt-2 text-white text-center'>React</p>
                        <Link href="/">
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Projects