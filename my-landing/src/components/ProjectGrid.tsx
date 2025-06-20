import React from 'react';
import { SiGithub } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';

const ProjectGrid: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl text-center font-semibold mb-8 gradient-light-text dark:gradient-dark-text">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project 1 */}
          <div className="project-card-light dark:project-card-dark">
            <h3>Create your Own Adventure App</h3>
            <p>
              A CYOA app that allows you to progressively build a story. 
              Built with React, Express/REST, and spontaneous story generation via OpenAI.
            </p>

            <div className="space-y-2 m-3">
              <a
                href="https://github.com/yourusername/your-repo"
                className="inline-flex items-center hover:underline"
              >
                <SiGithub className="w-4 h-4 mr-1" /> 
                <span>GitHub</span>
              </a> <br/>

              <a
                href="https://your-live-site-url.com"
                className="inline-flex items-center hover:underline"
              >
                <HiOutlineExternalLink className="w-4 h-4 mr-1" />
                <span>Live Site</span>
              </a>
            </div>
          </div>
          {/* Example Project 2 */}
          <div className="project-card-light dark:project-card-dark">
            <h3>Project 2</h3>
            <p>WIP</p>
          </div>
          {/* Example Project 3 */}
          <div className="project-card-light dark:project-card-dark">
            <h3>Project 3</h3>
            <p>WIP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;