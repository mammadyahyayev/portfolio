import {projectsData} from "../data/projectsData.ts";
import ProjectItem from "./ProjectItem.tsx";

const Projects = () => {
    return projectsData.map(project => (
        <ProjectItem name={project.name} imgUrl={project.imgUrl} tags={project.tags} link={project.link}/>
    ))
};

export default Projects;
