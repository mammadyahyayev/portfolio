import {NavLink} from "react-router-dom";
import LeftArrowIcon from "../components/icons/LeftArrowIcon.tsx";
import {skillDataByCategory} from "../data/skillData.ts";
import SectionHeader from "../components/SectionHeader.tsx";

const SkillsPage = () => {
    return (
        <div className="max-w-7xl w-11/12 mx-auto min-h-screen">
            <div className="lg:py-24">
                <NavLink
                    className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" to="/"
                    preventScrollReset={true}>
                    <LeftArrowIcon/>
                    Mammad Yahya
                </NavLink>
                {Array.from(skillDataByCategory.entries()).map(([category, skills]) => (
                    <div className="mt-10" key={category}>
                        <SectionHeader>{category} SKILLS</SectionHeader>
                        <ul className="mt-2 flex flex-wrap">
                            {skills.map(skill => (
                                <li className="mr-1.5 mt-2" key={skill}>
                                    <div
                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        {skill}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
