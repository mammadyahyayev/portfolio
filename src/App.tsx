import './App.css'
import HomePage from "./components/pages/HomePage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectsPage from "./components/pages/ProjectsPage.tsx";
import BlogPostsPage from "./components/pages/BlogPostsPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <div className="relative">
                <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                     style={{backgroundColor: "radial-gradient(600px at 704px 571px, rgba(29, 78, 216, 0.15), transparent 80%)"}}/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/blog-posts" element={<BlogPostsPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
