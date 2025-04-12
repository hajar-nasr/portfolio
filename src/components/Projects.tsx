import { useEffect, useState } from "react";
import { PROJECTS } from "../utils/constants";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [fullImage, setFullImage] = useState("");

  const openFullImage = (image: string) => {
    setFullImage(image);
  };

  const closeFullImage = () => {
    setFullImage("");
  };

  useEffect(() => {
    if (fullImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [fullImage]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div
                style={{
                  backgroundColor: project.backgroundColor,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain cursor-pointer"
                  onClick={() => openFullImage(project.image)}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex gap-4 items-center">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-500 hover:underline transition-colors"
                    >
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      title="View on GitHub"
                    >
                      <FaGithub className="w-6 h-6 text-gray-700 hover:text-black" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {fullImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={closeFullImage}
        >
          <img
            src={fullImage}
            alt="Full Project"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
