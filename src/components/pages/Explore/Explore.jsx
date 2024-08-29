const games = [
  {
    id: 1,
    title: "Whack A Mole",
    description: "Whack-a-Mole: Click on the moles that pop up to score points. Avoid the piranha plants to prevent a game over. Score as high as you can before hitting a plant!",
    tags: ["Click and Score", "Score Attack","Mole Hitting"],
    image: "https://preview.free3d.com/img/2019/02/2188276512560514892/raarchvv.jpg",
    hoverImage: "https://preview.free3d.com/img/2019/02/2188276512560514892/tsgtw6bw.jpg",
    heightClass: "h-auto",
    containerClass: "row-span-1",
    collaborator: "The AID Studio",
  },
];

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();

  const handleNavigation = (title, id) => {
    if (title == "Whack A Mole" && id == 1) {   // Whack A Mole Game...
      navigate('/explore/whackamole');
    }
  };

  return (
    <div className="bg-white px-4 py-10 md:px-8 lg:px-16 cursor-pointer font-poppins mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {games.map((project) => (
          <div
            key={project.id}
            className={`border border-gray-300 rounded-lg p-4 group ${project.containerClass}`}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full ${project.heightClass} object-contain rounded-md transition-opacity duration-300 ease-in-out group-hover:opacity-0`}
              />
              <img
                src={project.hoverImage}
                alt={project.title}
                className={`absolute inset-0 w-full ${project.heightClass} object-contain rounded-md transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100`}
              />
            </div>
            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-4xl font-normal mb-2">{project.title}</h3>
              <p className="text-gray-600 text-base mb-4">{project.description}</p>
              <div className="text-right">
                <button
                  className="bg-black text-white px-4 py-2 rounded-md border-2 border-transparent group-hover:border-black group-hover:bg-white group-hover:text-black transition"
                  onClick={() => handleNavigation(project.title, project.id)}
                >
                  Play Now ▶
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
