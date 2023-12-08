import './App.css'
import Home from "./components/Home.tsx";

function App() {
    return (
        <>
           <Home />
        </>
    )
}

export default App


/*
        1. If I define :root in every css file it will be applied globally or only the file where it is imported?
        2. How to update immediately tailwind css, when I change something it will update very lately,
        is there any other way to work with tailwind css
 */
