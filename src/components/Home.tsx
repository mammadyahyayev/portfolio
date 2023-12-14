import NavBar from "./navbar/NavBar.tsx";
import Projects from "./Projects.tsx";
import Experiences from "./Experiences.tsx";
import {employmentHistoryData} from "../data/timelineData.ts";
import Contact from "./Contact.tsx";
import Socials from "./socials/Socials.tsx";
import InlineTextHighlight from "./InlineTextHighlight.tsx";

function Home() {
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
                                    <Experiences title="Employment History" experiences={employmentHistoryData}/>
                                </ol>
                            </section>

                            <div className="flex flex-col md:flex-row items-center justify-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <Projects/>
                                </div>
                            </div>
                            <div className="flex justify-center items-start mt-10 p-20 gap-12">
                                <div className="w-full md:w-1/2">
                                    <Experiences title="Employment History" experiences={employmentHistoryData}/>
                                </div>
                            </div>
                            <div className="flex justify-center items-start mt-1">
                                <div className="w-full md:w-10/12">
                                    <Contact/>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
