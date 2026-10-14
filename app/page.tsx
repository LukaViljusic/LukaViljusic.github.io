import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="min-h-svh overflow-x-clip bg-[#101513] text-[#ECF0E9]">
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#B6CAA7] focus:px-4 focus:py-2 focus:text-[#162019]">Skip to content</a>
      <Navbar />
      <main className="min-w-0 lg:ml-72">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
