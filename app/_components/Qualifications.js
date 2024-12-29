"use client";

import webdesign from "../images/webdesign.JPG"
import webdev from "../images/neuefische.JPG"
import javascript from "../images/javascript.JPG"
import udemy_js from "../images/udemy_js.jpg"
import udemy_react from "../images/udemy_react.jpg"
import udemy_fullstack from "../images/udemy_fullstack.jpg"
import Modal from "./Modal";


import * as Styled from "./QualificationsStyles";

export default function Qualifications() {
    return (
        <>
            <h2 className="heading-big">qualifications</h2>
            <h1>Qualifikationen</h1>

            <Styled.QualfificationsWrapper>

                <Styled.QualificationCard>
                    <h4 className="card-heading">Web&nbsp;-&nbsp;Developer</h4>
                    <Styled.QualificationsImageContainer>
                    <Styled.QualificationsImage  
                            src={webdev} 
                            alt="Zertifikat Web-Developer"
                            fill
                        />
                    </Styled.QualificationsImageContainer>

                                        <Modal>
                                            <Styled.ModalContainer>
                                                <h4 className="card-heading font-josefinesans">The Wild Oasis</h4>

                                                <div>
                                                    <h6>To open the project in a new tab and try it out:</h6>
                                                </div>
                                                <Styled.ModalLink href="https://wild-oasis-booking-demo.vercel.app/" target="_blank">
                                                    hier klicken | click here
                                                </Styled.ModalLink>
                                                <Styled.Hr></Styled.Hr>
                                                <h4>Used Skills</h4>
                                                <Styled.Hr></Styled.Hr>
                                                <h4>About the Project</h4>
                                                <p>Dieses Projekt entstand mit Hilfe des Udemy Kurses XY von XY. Es ist eine Seite für die Buchung von Cabinen mit Login. </p>
                                            </Styled.ModalContainer>
                                        </Modal>
                </Styled.QualificationCard>

                <Styled.QualificationCard>
                    <h4 className="card-heading">Web&nbsp;-&nbsp;Designer</h4>
                    <Styled.QualificationsImageContainer>
                        <Styled.QualificationsImage  
                            src={webdesign} 
                            alt="Zertifikat Web-Designer"
                            fill
                        />
                    </Styled.QualificationsImageContainer>
                </Styled.QualificationCard>

                <Styled.QualificationCard>
                    <h4 className="card-heading">Softwareentwicklerin</h4>
                    <Styled.QualificationsImageContainer>
                        <Styled.QualificationsImage  
                            src={javascript} 
                            alt="Zertifikat Softwareentwicklerin JavaScript"
                            fill
                        />
                    </Styled.QualificationsImageContainer>
                </Styled.QualificationCard>
            
                <Styled.QualificationCard>
                    <h4 className="card-heading">JavaScript</h4>
                    <Styled.QualificationsImageContainer>
                        <Styled.QualificationsImage 
                            src={udemy_js} 
                            alt="udemy - JavaScrpit Bescheinigung"
                            fill
                        />
                    </Styled.QualificationsImageContainer>
                    {/* <Link href="https://www.udemy.com/certificate/UC-afe78176-09d7-4e00-a5e8-a9b470ae41da/" target="_blank">Link</Link> */}
                </Styled.QualificationCard>

                <Styled.QualificationCard>
                    <h4 className="card-heading">React, Next.js & co.</h4>
                    <Styled.QualificationsImageContainer>
                        <Styled.QualificationsImage  
                            src={udemy_react} 
                            alt="udemy - React, Next.js und co. - Bescheinigung"
                            fill
                        />
                    </Styled.QualificationsImageContainer>
                    {/* <Link href="https://www.udemy.com/certificate/UC-3524b4f9-ecfd-4b06-aaf6-3930e323f882/" target="_blank">Link</Link> */}
                </Styled.QualificationCard>

                <Styled.QualificationCard>
                    <h4 className="card-heading">Full Stack Dev</h4>
                    <Styled.QualificationsImageContainer>
                        <Styled.QualificationsImage  
                            src={udemy_fullstack} 
                            alt="udemy - Full Stack - Bescheinigung"
                            fill
                        />
                    </Styled.QualificationsImageContainer>
                    {/* <Link href="https://www.udemy.com/certificate/UC-f49eee2e-6577-4523-aa09-f83008272956/" target="_blank">Link</Link> */}
                </Styled.QualificationCard>

        </Styled.QualfificationsWrapper>
        </>
    );
}