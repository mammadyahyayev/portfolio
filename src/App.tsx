import './App.css'
import Home from "./components/Home.tsx";

function App() {
    return (
        <div className="relative">
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                 style={{backgroundColor: "radial-gradient(600px at 704px 571px, rgba(29, 78, 216, 0.15), transparent 80%)"}}/>
            <Home/>
        </div>
    )
}

export default App
