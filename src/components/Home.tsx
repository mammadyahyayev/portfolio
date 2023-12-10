import NavBar from "./NavBar.tsx";
import Projects from "./Projects.tsx";
import Timelines from "./Timelines.tsx";
import {employmentHistoryData} from "../data/timelineData.ts";
import Contact from "./Contact.tsx";
import Footer from "./Footer.tsx";

function Home() {
    return (
        <>
            <NavBar/>
            <div className="flex items-center justify-center flex-col pb-6">
                <div className="flex items-center justify-center flex-col mt-6">
                    <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-center">Mammad Yahyayev</h1>
                    <h3 className="text-base md:text-xl mb-3 font-medium">Software Engineer</h3>
                    <p className="text-sm max-w-xl mb-6 font-bold min-[400]:px-4">
                        I'm an indie full-stack developer and content creator building my version of the digital world
                        one step at a time. All coding projects are built from the ground up, from planning and
                        designing all the way to solving real-life problems with code. All video content is built the
                        same way, from ideation and planning, all the way to finalizing the content with artistic
                        touches. I publish that content on my YouTube channel ForrestKnight to more than 400k
                        subscribers.
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
                <div className="w-full md:w-1/2">
                    <Contact/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home
