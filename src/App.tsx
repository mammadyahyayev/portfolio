import './App.css'
import HomePage from "./components/pages/HomePage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectsPage from "./components/pages/ProjectsPage.tsx";
import BlogPostsPage from "./components/pages/BlogPostsPage.tsx";
import MouseCursorHighlighter from "./components/MouseCursorHighlighter.tsx";
import SkillsPage from "./components/pages/SkillsPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <div className="relative">
                <MouseCursorHighlighter />
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/skills" element={<SkillsPage/>}/>
                    <Route path="/blog-posts" element={<BlogPostsPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
