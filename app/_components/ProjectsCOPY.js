"use client";

import Image from "next/image";
import travellist from "../images/faraway2.JPG"
import wildoasis from "../images/wildoasis.JPG"
import budgetplanner from "../images/budgetplanner.JPG"
import leaflogger from "../images/leaflogger.JPG"
import swearingplant from "../images/swearingplant.JPG"
import workflowwizzard from "../images/workflow-wizzard.jpeg"
import usepopcorn from "../images/usepopcorn.JPG"
import Link from "next/link";
import Modal from "./Modal";
import styled from "styled-components";

export default function Projects() {
    return (
        <>
            <h2 className="heading-big">projects</h2>
            <h1>Übersicht der Projekte</h1>

            <p className="mb-10">Im folgenden sind Beispielprojekte aufgeführt. Beim Anklicken einer Karte wird sich ein neuer Reiter öffnen, in dem das Projekt betrachtet und ausprobiert werden kann.</p>

            <WrapperProjects>

                <CardContainer>
                        <h4 className="card-heading">The Wild Oasis</h4>
                    <div className="image-container">
                        {/* <span className="card-heading">Booking-Site-Demo</span> */}
                        <div className="image-container">
                            <Image 
                                src={wildoasis} 
                                alt="Projekt 'The Wild Oasis - Booking-Demo' "
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: 'contain' }}
                                className="image"
                                />
                        </div>
                    </div>
                            <span>created with Next.js, app-router & Supabase</span>
                        <Modal>
                                <StyledLinkProject href="https://wild-oasis-booking-demo.vercel.app/" target="_blank"  className="styledprojectlink">
                                    <div className="image-container">
                                        <Image 
                                            src={wildoasis} 
                                            alt="Projekt 'The Wild Oasis - Booking-Demo' "
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            style={{ objectFit: 'contain' }}
                                            className="image"
                                            />
                                    </div>
                                </StyledLinkProject>
                            <p> test </p>
                        </Modal>
                </CardContainer>
                
                <CardContainer>
                    <StyledLinkProject href="https://travel-list-orpin.vercel.app/" target="_blank">
                        <h4 className="card-heading">travel list</h4>
                        <div className="image-container">
                            <Image 
                                src={travellist} 
                                alt="Projekt 'Travel-List' "
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: 'contain' }}
                                className="image"
                                />
                        </div>
                            <span>created with React</span>
                    </StyledLinkProject>
                </CardContainer>

                <CardContainer>
                    <StyledLinkProject href="https://budget-planner-blond.vercel.app/" target="_blank">
                        <h4 className="card-heading">budget planner</h4>
                        <div className="image-container">
                            <Image 
                                src={budgetplanner} 
                                alt="Projekt 'Budget-Planner' "
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: 'contain' }}
                                className="image"
                                />
                        </div>
                        <span>created with JS</span>
                    </StyledLinkProject>
                </CardContainer>

                <CardContainer>
                <StyledLinkProject href="https://leaf-logger-jb.vercel.app/" target="_blank">
                    <h4 className="card-heading">leaf logger</h4>
                    <div className="image-container">
                        <Image 
                            src={leaflogger} 
                            alt="Projekt 'Leaf-Logger' "
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'contain' }}
                            className="image"
                            />
                    </div>
                    <span>created with next.js & pages router</span>
                </StyledLinkProject>
                </CardContainer>
                
                <CardContainer>
                    <h4 className="card-heading">swearing plant</h4>
                    <div className="image-container">
                        <Image 
                            src={swearingplant} 
                            alt="Projekt 'Budget-Planner' "
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'contain' }}
                            className="image"
                        />
                    </div>
                    <span>created with Arduino</span>
                    <span className="card-txt">dieses Projekt ist leider nicht ohne Arduino Teile zu testen </span>
                </CardContainer>

                <CardContainer>
                <StyledLinkProject href="https://the-workflow-wizard.vercel.app/" target="_blank">
                    <h4 className="card-heading">workflow wizzard</h4>
                    <div className="image-container">
                        <Image 
                            src={workflowwizzard} 
                            alt="Projekt 'Workflow Wizzard' "
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'contain' }}
                            className="image"
                            />
                    </div>
                    <span>created with next.js & pages router</span>
                    <span className="card-txt"> Work in Progress </span>
                </StyledLinkProject>
                </CardContainer>

                <CardContainer>
                    <StyledLinkProject href="https://use-popcorn-app-nine.vercel.app/" target="_blank">
                        <h4 className="card-heading">usePopcorn</h4>
                        <div className="image-container">
                            <Image 
                                src={usepopcorn} 
                                alt="Projekt 'usePopcorn' "
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: 'contain' }}
                                className="image"
                                />
                        </div>
                        <span>created with react</span>
                    </StyledLinkProject>
                </CardContainer>

            <CardContainer>
                <StyledLinkProject href="#" target="_blank">
                    <h4>Web-Shop</h4>
                    <h4>coming soon</h4>
                </StyledLinkProject>
            </CardContainer>

            <CardContainer>
                <StyledLinkProject href="#" target="_blank">
                    <h4>coming soon</h4>
                </StyledLinkProject>
            </CardContainer>
                       
            </WrapperProjects>
        </>
    );
}

const WrapperProjects = styled.div`
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

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
    background-color: var(--akzentfarbe);
    margin: 1rem;
    
    width: 90%;
    height: 500px;
    padding: 10px;
  
    border: 0 solid ;
    border-radius: 20px;
    box-shadow: 2px 5px 0 var(--boxshadow);

    @media (min-width: 1024px) {
        margin: 1rem;
        padding: 0 1rem;
  
        /* width <= 33%, damit nur 3 Cards je Reihe dargestellt werden */
        width: 28%;
        height: 20vw;
    }
`;

const StyledLinkProject = styled(Link)`
    width: 15vw;
    height: 25vw;
`;

// /* ------- PROJECTS ------- */

  
//   .card-txt {
//     position: absolute;
//     color: red;
//     /* rotate: -45deg; */
//     margin-top: 7rem;
//     font-size: 1.8rem;
//     width: 250px ;
//     background-color: hsla(0, 0%, 100%, 0.5);
//   }
  

//     .card-txt {
//       position: absolute;
//       font-size: 1.7vw;
//       background-color: hsla(0, 0%, 100%, 0.5);
//     }
//   }
  
//   .card-heading {
//     font-size: 3.5vw;
//     font-weight: bold;
//     height: 3rem;
//     display: flex;
//     align-items: center;
//   }
//   @media (min-width: 1024px) {
//     .card-heading {
//       font-size: 1.5vw;
//       padding-top: 1rem;
//       height: 6rem;
//     }
//   }
