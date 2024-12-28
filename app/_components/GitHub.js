import styled from "styled-components";
import Link from "next/link";

export default function GitHub() {
    return (
        <>
            <h2 className="heading-big">GitHub</h2>
            <h1>GitHub</h1> 

            <Link href="https://github.com/juliabellmann" target="_blank" className="link-github"><h3>➡ hier geht es zum GitHub-Profil</h3></Link>
            
            <StyledIframe 
                src="https://github.com/juliabellmann" 
                loading="lazy"
                title="Iframe zum GitHub Account"
            />
        </>
    );
}

const StyledIframe = styled.iframe`
    min-height: 70vh;
    max-height: 80vh;
    min-width: 80vw;
    max-width: 90vw;

    padding-bottom: 5rem;
    margin-top: 2rem;

    @media (min-width: 1024px) {
        min-height: 80vh;
        max-height: 90vh;
        min-width: 65vw;
        max-width: 90vw;
    }
`;