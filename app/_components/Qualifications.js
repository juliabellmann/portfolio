"use client";

import webdesign from "../images/webdesign.JPG"
import webdev from "../images/neuefische.JPG"
import javascript from "../images/javascript.JPG"
import udemy_js from "../images/udemy_js.jpg"
import udemy_react from "../images/udemy_react.jpg"
import udemy_fullstack from "../images/udemy_fullstack.jpg"
import Modal from "./Modal";


import * as Styled from "./QualificationsStyles";
import Link from "next/link";

export default function Qualifications() {
    return (
        <>
            <h2 className="heading-big">qualifications</h2>
            <h1>Qualifikationen</h1>

            <Styled.QualfificationsWrapper>

                <Styled.QualificationCard>
                    <h4 className="card-heading">Web-Developer</h4>
                    <Styled.QualificationsImageContainer>
                    <Styled.QualificationsImage  
                            src={webdev} 
                            alt="Zertifikat Web-Developer"
                            fill
                        />
                    </Styled.QualificationsImageContainer>

                                        <Modal>
                                            <Styled.ModalContainer>
                                                <h4 className="card-heading">Web-Developer</h4>
                                                <h3>Abschluss: Zertifikat Web-Entwickler</h3>
                                                <h4>Vollzeit Bootcamp Remote</h4>
                                                <h5>Anbieter: Neue Fische </h5>
                                                <div>
                                                    <h5>Kursinhalt:</h5>
                                                    <Styled.QualificationList>
                                                        <li>HTML</li>
                                                        <li>CSS</li>
                                                        <li>JavaScript</li>
                                                        <li>React</li>
                                                        <li>Pair Programming</li>
                                                        <li>Node.js</li>
                                                        <li>NoSQL</li>
                                                        <li>REST</li>
                                                        <li>Shell</li>
                                                        <li>Git</li>
                                                        <li>Design Basics</li>
                                                        <li>Agile Workflow</li>
                                                        <li>Tooling</li>
                                                    </Styled.QualificationList>
                                                </div>
                                                <Styled.QualificationLink href="https://assets.ctfassets.net/m8n66tuamygx/6TfPYjWAl4LuUDTveiybcc/3ec88ed49dec00bffa63f08724432da8/NF_Infomaterial-2024_DE.pdf">hier geht es zur Kursbeschreibung direkt beim Anbieter</Styled.QualificationLink>
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