import ProjectSingle from './ProjectSingle';
import {projectsData} from '../../data/projectsData';

function ProjectsGrid() {

    return (
        <section id="projects" className="py-5 sm:py-10 mt-5 sm:mt-10">
            <div className="text-center">
                <p className="font-semibold text-2xl sm:text-4xl mb-1 dark:text-ternary-light">
                    Projects
                </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-5">
                {projectsData.map((project, index) => (
                    <ProjectSingle key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default ProjectsGrid;
