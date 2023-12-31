import {Experience} from "../data/experiencesData.ts";
import ExperienceItem from "./ExperienceItem.tsx";

type ExperiencesProps = {
    experiences: Experience[];
}

const Experiences = ({experiences}: ExperiencesProps) => {
    return (
        <>
            {experiences.map(experience => (
                <ExperienceItem experience={experience} key={experience.id}/>
            ))}
        </>
    );
};

export default Experiences;
