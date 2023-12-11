import NavBar from "./NavBar.tsx";
import Projects from "./Projects.tsx";
import Timelines from "./Timelines.tsx";
import {employmentHistoryData} from "../data/timelineData.ts";
import Contact from "./Contact.tsx";
import Footer from "./Footer.tsx";

function Home() {
    return (
        <>
            <div className="max-w-7xl w-11/12 mx-auto">
                <NavBar/>
                <div className="flex items-center justify-center flex-col pb-6">
                    <div className="flex items-center justify-center flex-col mt-6">
                        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-center">Mammad Yahyayev</h1>
                        <h3 className="text-base md:text-xl mb-3 font-medium">Software Engineer</h3>
                        <p className="text-sm max-w-xl mb-6 font-bold min-[400]:px-4">
                            As a software engineer and system architecture enthusiast, I am passionate about designing
                            and implementing efficient, scalable, and secure software systems. With a solid foundation
                            in software engineering principles and experience working with a variety of programming
                            languages and development frameworks.

                            My expertise extends beyond simply writing code. I have a deep understanding of the entire
                            software development lifecycle, from requirements gathering and design to testing and
                            deployment.

                            I am skilled at collaborating with cross-functional teams to ensure that all stakeholders'
                            needs are met and that projects are completed on time and within budget.

                            In addition to my technical skills, I am a strong communicator and problem-solver. I enjoy
                            working with others to understand their needs and requirements and am able to distill
                            complex technical concepts into clear and concise language.

                            I am always looking for new challenges and opportunities to learn and grow as a software
                            engineer and system architect.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Projects/>
                    </div>
                </div>
                <div className="flex justify-center items-start mt-10 p-20 gap-12">
                    <div className="w-full md:w-1/2">
                        <Timelines title="Employment History" dataList={employmentHistoryData}/>
                    </div>
                    {/*<div className="w-1/2">
                    <Timelines title="Education" dataList={educationHistoryData}/>
                </div>*/}
                </div>
                <div className="flex justify-center items-start mt-1">
                    <div className="w-full md:w-10/12">
                        <Contact/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Home
