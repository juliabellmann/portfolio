
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

// mobile first

export const WrapperProjects = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%; // des Mains
    
    color: var(--card-text-color);

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; // um die Heading oben, das Bild mittig und den Button unten auszurichten
    gap: 15px; 

    background-color: var(--akzentfarbe);
    margin: 1rem;
    
    /* Größe für Handy-Ansicht */
    width: 90%;
    height: 55vw;
    padding: 25px 10px 25px 10px;
  
    border: 0 solid ;
    border-radius: 30px;
    border-top: 1px solid var(--color-font);
    border-bottom: 3px solid var(--color-font);

    
    @media (min-width: 1024px) {
        /*  für Display-Ansicht */
        width: 28%; /* width <= 33%, damit nur 3 Cards je Reihe dargestellt werden */
        height: 20vw;
    }
`;

export const ProjectImageContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    transition: transform 0.3s ease;

    /* Größe für Handy-Ansicht */
    width: 40vw;
    height: 55vw;

    overflow: hidden;

    /* padding-bottom: 20px; */

    
    @media (min-width: 1024px) {
        /* für Display-Ansicht */
        width: 15vw;
        height: 12.5vw;
    }

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectImage = styled(Image)`

  filter: grayscale(100%);
  transition: filter 0.3s ease;

  object-fit: cover;

    &:hover {
    filter: grayscale(0);
    }
`;

export const LinkProject = styled(Link)`
text-decoration: underline;
`;

export const ModalLink = styled(Link)`
    text-decoration: underline;
    margin: 10px;
`;

export const ModalContainer = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 50px;


`;

export const LinkImage = styled.div`
    /* position: relative; */
    width: 35vw;
    height: 30vw;

`;

export const ModalImage = styled.div`
    position: relative;
    width: 30vw;
    height: 25vw;
    margin: 10px 50px;
`;

export const EmptyProject = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const ModalSkills = styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid white;
    border-radius: 20px;
    
    margin: 10px;
    padding: 10px;
    gap: 15px; /* zwischen svg und Bezeichnung*/
`;

export const ModalSVG = styled.svg`
    height: 35px;
    fill: white;
`;
  
export const Hr = styled.hr`
    border: 2px solid white;
    width: 80%;
    margin: 20px 0;
`;

export const ModalSkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 50vw;
    
`;

export const ProjectList = styled.ul`

    list-style: square;

    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 2rem;

    justify-content: center;
    align-items: center;

    margin: 1rem; */
`;