export default function GitHub() {
    return (
        <article>
            <h2 className="heading-big">GitHub</h2>
            <h1>GitHub</h1> 

            <a href="https://github.com/juliabellmann" target="_blank" className="link-github">➡ hier geht es zum GitHub-Profil</a>
            
            <iframe 
                src="https://github.com/juliabellmann" 
                width="100%" 
                height="90%" 
                loading="lazy"
                title="Iframe zum GitHub Account"
            />
        </article>
    );
}