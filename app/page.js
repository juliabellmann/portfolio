import AboutMe from "./aboutme/page";
import Qualifications from "./_components/Qualifications";
import GitHub from "./_components/GitHub";
import Skills from "./_components/Skills";
import Home from "./_components/Home";
import Projects from "./_components/Projects";

export default function HomePage() {
    return (
        <>
        <Home></Home>
        <AboutMe />
        <Skills />
        <Qualifications />
        <Projects />
        <GitHub></GitHub>
        </>
    );
}