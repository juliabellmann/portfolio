import Link from "next/link";

export default function GitHub() {
    return (
        <>
            <h2 className="heading-big">GitHub</h2>
            <h1>GitHub</h1> 

            <Link href="https://github.com/juliabellmann" target="_blank" className="link-github"><h3>➡ hier geht es zum GitHub-Profil</h3></Link>
            
            <iframe 
                src="https://github.com/juliabellmann" 
                loading="lazy"
                title="Iframe zum GitHub Account"
            />
        </>
    );
}