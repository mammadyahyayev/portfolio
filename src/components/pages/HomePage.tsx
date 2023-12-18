import NavBar from "../navbar/NavBar.tsx";
import Projects from "../Projects.tsx";
import Experiences from "../Experiences.tsx";
import {employmentHistoryData} from "../../data/experiencesData.ts";
import Contact from "../Contact.tsx";
import Socials from "../socials/Socials.tsx";
import InlineTextHighlight from "../InlineTextHighlight.tsx";
import RightArrowIcon from "../icons/RightArrowIcon.tsx";
import Blogs from "../Blogs.tsx";
import {NavLink} from "react-router-dom";

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

                            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                                <ol className="group/list">
                                    <Experiences experiences={employmentHistoryData}/>
                                </ol>
                                <div className="mt-12"><a
                                    className="inline-flex items-center font-medium leading-tight text-slate-200 group"
                                    aria-label="View Full Résumé" href="/resume.pdf">
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

                            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
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

                            <section id="blog" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                                     aria-label="Blog Posts">
                                <Blogs/>
                                <div className="mt-12">
                                    <a className="inline-flex items-center leading-tight font-semibold text-slate-200 group cursor-pointer"
                                       href="/blog-posts">
                                        <span
                                            className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                            View Full Blog Archive
                                        </span>
                                        <RightArrowIcon/>
                                    </a>
                                </div>
                            </section>

                            <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
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
