import React from "react";
import Image from "next/image";
import recipeImg from "../public/assets/projects/recipe.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const recipe = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={recipeImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 text-white">Recipe App</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="text-[#398378]">Overview</h2>
          <p>
            Crafted with the modern web in mind, this app harnesses the power of
            React for a seamless user experience, CSS for a visually enticing
            interface, Axios for robust server communication, and Formik for
            efficient form management. This combination ensures a robust and
            responsive application that's a joy to use. With a simple query,
            users can unearth recipes from a diverse selection. But it's not
            just about taking; it's about giving back. Users can contribute
            their culinary secrets, enriching the repository. And every recipe
            is just a tap away, on any device, thanks to its responsive design.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
            Demo
          </button>
          <button className="px-8 py-2 mt-4 bg-[#398378] text-white rounded-full shadow-lg shadow-gray-500 hover:bg-[#3fa38c] hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
            Code
          </button>
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
                Axios
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Formik
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
    </div>
  );
};
export default recipe;
