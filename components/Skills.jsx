import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest upppercase text-[#398378]">Skills</p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/html.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
            </div>
          </div>
         </div>
         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/css.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
            </div>
          </div>
         </div>
         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/javascript.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
            </div>
          </div>
         </div>
         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/react.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
            </div>
          </div>
         </div>
         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/nextjs.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>NextJs</h3>
            </div>
          </div>
         </div>
         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/tailwind.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
            </div>
          </div>
         </div>
         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/node.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
            </div>
          </div>
         </div>
         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/github.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
            </div>
          </div>
         </div>
         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/mongo.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
            </div>
          </div>
         </div>
         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/firebase.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
            </div>
          </div>
         </div>
         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/express.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>Express</h3>
            </div>
          </div>
         </div>
         <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-2 border-gray-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image src="/assets/skills/git.png"
                    width={50}
                    height={50}
                    alt="/"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
            </div>
          </div>
         </div>


        </div>
      </div>
    </div>
  );
};
export default Skills;
