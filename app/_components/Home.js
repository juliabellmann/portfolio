import LogoBig from "./LogoBig"

export default function Home() {
    return (
        <>
            <h2 className="logo-big"><LogoBig /></h2>
            <h2 className="heading-big">Bellmann</h2>
            <h1>Julia Bellmann</h1>
            

            
            <div className="home-heading">
                <span className="nobreak">Web-Developer</span>
                <span className="accentcolor"> | </span>
                <span className="nobreak"> Web-Designer</span>
                <span className="accentcolor"> | </span>
                <span className="">Softwarentwicklerin JavaScript</span>    
            </div>
            <div>

            {/* <hr></hr> */}
            <br></br>
            <br></br>
            <br></br>
            <h3>Moin Moin</h3>
            <br></br>
            <p>Herzlich Willkommen auf meiner Portfolio-Webseite.</p>
            <p>Hier werde ich in nächster Zeit nach und nach mehr von meinen Projekten hochladen.</p>
            <hr></hr>
            <p><em>Welcome to my portfolio website.</em></p>
            <p><em>In the coming weeks, I will gradually upload more of my projects here.</em></p>
            <hr></hr>
            <p>If you spot any glitches 🐞, please set them free — they just need a little space to debug!</p>
            {/* <hr></hr> */}
            </div>

        </>
    );
}