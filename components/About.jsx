import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest">About</p>
          <h2 className="text-[#398378] py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello! I'm a passionate coder and a recent graduate of DevMountain's
            Web Development program, where I honed my skills in crafting sleek,
            user-centric digital experiences. My journey into the world of web
            development began with a curiosity for creating things that are both
            functional and beautiful, and hopefully will blossom into a fulfilling
            career path. I'm an ardent advocate for continuous learning and
            believe there's always a new library or framework around the corner
            that can elevate my work. With a keen eye for design and a coder's
            attention to detail, I strive to bridge the gap between user
            interface (UI) and user experience (UX) design, ensuring that the
            applications I develop are not only intuitive and accessible but
            also engaging.
          </p>
          <p className="py-2 text-gray-600">
            As much as I love code, I believe balance is key. Away from the
            keyboard, you'll find me embracing the great outdoors. Whether it's
            backpacking through serene trails, setting up camp under the stars, fly-fishing, or kayaking a lake, I
            find that my best ideas often come to me when I'm surrounded by
            nature. It's in these moments of adventure and tranquility that I
            find the inspiration and creativity that I bring back to my work.
            I'm eager to bring my mix of technical skills and creative vision to
            a team that values innovation, excellence, and a bit of outdoor
            talk. Let's create something remarkable together!
          </p>
          
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="/assets/about2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default About;
