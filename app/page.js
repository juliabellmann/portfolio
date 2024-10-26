import AboutMe from "./aboutme/page";
import Projects from "./_components/Projects";
import Qualifications from "./_components/Qualifications";
import GitHub from "./_components/GitHub";
import Skills from "./_components/Skills";

export default function Home() {
    return (
        <>
        <div>
            <h1>Julia Bellmann</h1>
            <h2>Web-Developer | Softwarentwicklerin JavaScript | soon: Web-Designer</h2>
        </div>

        <h3>Moin Moin</h3>
                <p>Herzlich Willkommen auf meinem Git-Hub Profil.</p>
                <p>Hier werde ich in nächster Zeit nach und nach mehr von meinen Projekten hochladen.</p>
                <hr></hr>
                <p><em>Welcome to my GitHub profile.</em></p>
                <p><em>In the coming weeks, I will gradually upload more of my projects here.</em></p>
                <hr></hr>
                <p>If you spot any glitches 🐞, please set them free — they just need a little space to debug!</p>
                <hr></hr>

        <AboutMe />
        <Qualifications />
        <Skills />
        <Projects />
        <GitHub></GitHub>
        </>
    );
}