import {projectsData} from "../data/projectsData.ts";
import ProjectItem from "./ProjectItem.tsx";

const Projects = () => {
    return projectsData.slice(0, 3).map(project => (
        <ProjectItem
            key={project.name}
            name={project.name}
            description={project.description}
            imageSrc={project.imageSrc}
            technologies={project.technologies}
            link={project.link}
            year={project.year}
        />
    ))
};

export default Projects;
