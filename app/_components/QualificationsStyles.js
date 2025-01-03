import styled from "styled-components";
import Image from "next/image";

export const QualfificationsWrapper = styled.div`
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

export const QualificationCard = styled.div`
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

export const QualificationsImageContainer = styled.div`
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

export const QualificationsImage = styled(Image)`

filter: grayscale(100%);
  transition: filter 0.3s ease;

  object-fit: contain;

    &:hover {
    filter: grayscale(0);
    }
`;