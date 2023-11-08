import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogImg from "../public/assets/projects/blog.jpg";
import gptImg from "../public/assets/projects/gptclone.png";
import recipeImg from "../public/assets/projects/recipe.png";
import moviesImg from "../public/assets/projects/movies.png";
import ProjectItem from "./ProjectItem";




const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#398378]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Fly Fishing blog"
            backgroundImg={blogImg}
            projectUrl="/blog"
          />
          <ProjectItem
            title="GPT-3.5 Clone"
            backgroundImg={gptImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Recipe App"
            backgroundImg={recipeImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Movies App"
            backgroundImg={moviesImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
