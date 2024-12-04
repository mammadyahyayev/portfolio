import './App.css'
import HomePage from "./pages/home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectsPage from "./pages/projects.tsx";
import MouseCursorHighlighter from "./app/components/MouseCursorHighlighter.tsx";
import SkillsPage from "./pages/skills.tsx";
import BlogPostsPage from "./pages/blogPosts.tsx";

function App() {
    return (
        <BrowserRouter>
            <div className="relative">
                <MouseCursorHighlighter/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/skills" element={<SkillsPage/>}/>
                    <Route path="/blog" element={<BlogPostsPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App