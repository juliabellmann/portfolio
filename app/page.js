import AboutMe from "./aboutme/page";
import Projects from "./_components/Projects";
import Qualifications from "./_components/Qualifications";
import GitHub from "./_components/GitHub";
import Skills from "./_components/Skills";
import Home from "./_components/Home";


export default function HomePage() {
    return (
        <>
        <Home></Home>
        <AboutMe />
        <Qualifications />
        <Skills />
        <Projects />
        <GitHub></GitHub>
        </>
    );
}