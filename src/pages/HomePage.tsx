import NavBar from "../components/navbar/NavBar.tsx";
import Projects from "../components/Projects.tsx";
import Experiences from "../components/Experiences.tsx";
import {employmentHistoryData} from "../data/experiencesData.ts";
import Contact from "../components/Contact.tsx";
import Socials from "../components/socials/Socials.tsx";
import InlineTextHighlight from "../components/InlineTextHighlight.tsx";
import RightArrowIcon from "../components/icons/RightArrowIcon.tsx";
import BlogPosts from "../components/BlogPosts.tsx";
import {NavLink} from "react-router-dom";
import {skillData} from "../data/skillData.ts";
import SectionHeader from "../components/SectionHeader.tsx";

function HomePage() {
    return (
        <>
            <div className="max-w-7xl w-11/12 mx-auto">
                <div
                    className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                    <div className="lg:flex lg:justify-between lg:gap-4">
                        <header
                            className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                                    Mammad Yahyayev
                                </h1>
                                <h3 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                                    Software Engineer
                                </h3>
                                <p className="mt-4 max-w-xs leading-normal">
                                    I love to create and design open source projects for people around the world who
                                    need dire help to their problems.
                                </p>
                                <NavBar/>
                            </div>

                            <Socials/>
                        </header>
                        <main className="pt-24 lg:w-1/2 lg:py-24">
                            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                                     aria-label="About me">
                                <p className="mb-4">
                                    As a software engineer and <InlineTextHighlight> system architecture
                                    enthusiast</InlineTextHighlight>, I am passionate about
                                    designing and implementing efficient, scalable, and secure software systems. With a
                                    solid foundation in software engineering principles and experience working with a
                                    variety of programming languages and development frameworks.
                                </p>
                                <p className="mb-4">
                                    My expertise extends beyond simply writing code. I have a deep understanding of the
                                    entire <InlineTextHighlight> software development lifecycle</InlineTextHighlight>,
                                    from requirements gathering and design to
                                    testing and deployment.
                                </p>
                                <p className="mb-4">
                                    I am skilled at collaborating with cross-functional teams to ensure that all
                                    stakeholders' needs are met and that projects are completed on time and within
                                    budget.
                                </p>
                                <p className="mb-4">
                                    In addition to my technical skills, I am a
                                    <InlineTextHighlight> strong communicator</InlineTextHighlight> and
                                    <InlineTextHighlight> problem-solver</InlineTextHighlight>.
                                    I enjoy working with others to understand their needs and
                                    requirements and am able to
                                    distill complex technical concepts into clear and concise language.
                                </p>
                                <p>
                                    I am always looking for new challenges and opportunities to learn and grow as a
                                    software engineer and system architect.
                                </p>
                            </section>

                            <SectionHeader>Experiences</SectionHeader>
                            <section id="experience"
                                     className="mb-16 mt-6 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                                <ol className="group/list">
                                    <Experiences experiences={employmentHistoryData}/>
                                </ol>
                                <div className="mt-12">
                                    <a target="_blank"
                                       href="https://drive.google.com/file/d/1uAT7UDmo0zvf6hdiviriAF8SDj4cjpJK/view?usp=sharing"
                                       className="inline-flex items-center font-medium leading-tight text-slate-200 group"
                                       aria-label="View Full Résumé">
                                    <span>
                                        <span
                                            className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full </span><span
                                        className="whitespace-nowrap"><span
                                        className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Resume</span>
                                            <RightArrowIcon/>
                                    </span>
                                </span>
                                    </a>
                                </div>
                            </section>

                            <SectionHeader>Projects</SectionHeader>
                            <section id="projects" className="mb-16 mt-6 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                                     aria-label="Projects">
                                <ul className="group/list">
                                    <Projects/>
                                </ul>
                                <div className="mt-12">
                                    <NavLink
                                        className="inline-flex items-center leading-tight font-semibold text-slate-200 group cursor-pointer"
                                        to="/projects" preventScrollReset={true}>
                                        <span
                                            className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                            View Full Project Archive
                                        </span>
                                        <RightArrowIcon/>
                                    </NavLink>
                                </div>
                            </section>

                            <SectionHeader>Blog Posts</SectionHeader>
                            <section id="blog" className="mb-16 mt-6 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                                     aria-label="Blog Posts">
                                <BlogPosts/>
                                <div className="mt-12">
                                    <NavLink
                                        className="inline-flex items-center leading-tight font-semibold text-slate-200 group cursor-pointer"
                                        to="/blog-posts" preventScrollReset={true}>
                                        <span
                                            className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                            View Full Blog Archive
                                        </span>
                                        <RightArrowIcon/>
                                    </NavLink>
                                </div>
                            </section>

                            <SectionHeader>Skills</SectionHeader>
                            <section id="skills" className="mb-16 mt-6 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                                     aria-label="Skills">
                                <ul className="mt-2 flex flex-wrap">
                                    {skillData.slice(0, 6).map(skill =>
                                        <li className="mr-1.5 mt-2" key={skill.name}>
                                            <div
                                                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                                {skill.name}
                                            </div>
                                        </li>
                                    )}
                                </ul>
                                <div className="mt-12">
                                    <NavLink
                                        className="inline-flex items-center leading-tight font-semibold text-slate-200 group cursor-pointer"
                                        to="/skills" preventScrollReset={true}>
                                        <span
                                            className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                            View All Skills
                                        </span>
                                        <RightArrowIcon/>
                                    </NavLink>
                                </div>
                            </section>

                            <SectionHeader>Contact me</SectionHeader>
                            <section id="contact" className="mb-16 mt-6 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                                     aria-label="Contact Me">
                                <Contact/>
                            </section>
                        </main>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage
