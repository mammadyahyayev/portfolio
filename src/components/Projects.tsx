import {projectsData} from "../data/projectsData.ts";
import ProjectItem from "./ProjectItem.tsx";

const Projects = () => {
    return projectsData.slice(0, 3).map(project => (
        <ProjectItem name={project.name} tags={project.tags} link={project.link}/>
    ))
};

export default Projects;
