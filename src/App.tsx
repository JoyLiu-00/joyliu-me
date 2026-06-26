import { useEffect } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Interests from "./components/Interests"
import { MillionCat } from "./components/MillionCat"
import Navbar from "./components/Navbar"
import Plog from "./components/Plog"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  useEffect(() => {
    const handleVisibility = () => {
      document.title = document.hidden
        ? "come back... 👀"
        : "Hi, I'm Joy Liu"
    }
    document.addEventListener("visibilitychange", handleVisibility)
    return () => document.removeEventListener("visibilitychange", handleVisibility)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Plog />
        <Interests />
      </main>
      <Contact />
      <MillionCat />
    </>
  )
}

export default App
