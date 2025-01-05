"use client";

import webdesign from "../images/webdesign.JPG"
import webdev from "../images/neuefische.JPG"
import javascript from "../images/javascript.JPG"
import udemy_js from "../images/udemy_js.jpg"
import udemy_react from "../images/udemy_react.jpg"
import udemy_fullstack from "../images/udemy_fullstack.jpg"
import python from "../images/python.jpg"
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
                            <Styled.QualificationLink href="https://www.neuefische.de/bootcamp/web-development">hier geht es zur Kursbeschreibung direkt beim Anbieter</Styled.QualificationLink>
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
                    <Modal>
                        <Styled.ModalContainer>
                            <h4 className="card-heading">Web-Design</h4>
                            <h3>Abschluss: Zertifikat Web-Design</h3>
                            <h4>Vollzeit Bootcamp Remote 2 Monate</h4>
                            <h5>Anbieter: GFN GmbH </h5>
                            <div>
                                
                                <h5>HTML5</h5>
                                <Styled.QualificationList>
                                    <li>Definition und Grundlagen </li>
                                    <li>Zeichenkodierung </li>
                                    <li>Einfache Textformatierung, Listen und Aufzählungen </li>
                                    <li>Einbinden von Bildern, Hyperlinks </li>
                                    <li>Tabellen und Formulare,  iFrames </li>
                                    <li>Einbinden von Video und Audio, Meta-Tags</li>
                                </Styled.QualificationList>

                                <h5>Responsive Webdesign mit CSS3</h5>
                                <Styled.QualificationList>
                                    <li>Grundlagen und einfache Layouts </li>
                                    <li>Bedingte Selektoren </li>
                                    <li>Pseudoklassen und Pseudoelemente </li>
                                    <li>Flexible Layouts mit Flexbox </li>
                                    <li>Grafische Elemente und Keyframe-Animationen </li>
                                    <li>Dynamisches CSS mit Kalkulationen und Variablen </li>
                                    <li>Media Queries </li>
                                    <li>Praxisbeispiel: DasStore-Layout für Mobilgeräte optimieren</li>
                                </Styled.QualificationList>

                                <h5>SCSS & Bootstrap 4</h5>
                                <Styled.QualificationList>
                                    <li>Einführung in Bootstrap </li>
                                    <li>Mit Bootstrap layouten </li>
                                    <li>Bootstraps Grid-System </li>
                                    <li>Jumbotron und Abstände, Farben und Textformatierung </li>
                                    <li>Navigationen, Bootstrap-Layouts anpassen</li>
                                </Styled.QualificationList>

                                <h5>UX-/UI-Design</h5>
                                <Styled.QualificationList>
                                    <li>Bedarfs- und Anforderungsanalyse </li>
                                    <li>Das konzeptionelle Leitmotiv </li>
                                    <li>Informations- und Navigationsarchitektur, Layout </li>
                                    <li>Design und Gestaltung, Text und Typographie </li>
                                    <li>Content, Usability und Barrierefreiheit</li>
                                </Styled.QualificationList>

                            </div>
                            <Styled.QualificationLink href="https://www.gfn.de/webdesign/webdesign/webdesigner-zertifizierung-gefoerdert/">hier geht es zur Kursbeschreibung direkt beim Anbieter</Styled.QualificationLink>
                            </Styled.ModalContainer>
                    </Modal>
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
                    <Modal>
                        <Styled.ModalContainer>
                            <h4 className="card-heading">Softwareentwicklerin JavaScript</h4>
                            <h3>Abschluss: Zertifikat Softwareentwicklerin JavaScript</h3>
                            <h4>Vollzeit Bootcamp Remote 3 Monate</h4>
                            <h5>Anbieter: GFN GmbH</h5>
                            <div>

                                <h5>JavaScript-Einführung</h5>
                                <Styled.QualificationList>
                                    <li>Relationale und logische Operatoren </li>
                                    <li>Datentypen, Variable, Strings, Regex </li>
                                    <li>Typenkonvertierung und Nummern</li>
                                    <li>Funktionen schreiben </li>
                                    <li>Programmierrichtlinien</li>
                                    <li>Rekursion </li>
                                    <li>Times und Range </li>
                                    <li>Mehrdimensionale Arrays </li>
                                </Styled.QualificationList>

                                <h5>JavaScript und das Dynamic Object Model: HTML mühelos manipuliert</h5>
                                <Styled.QualificationList>
                                    <li>CSS, HTML </li>
                                    <li>Data-Attribute </li>
                                    <li>CreateElement und appendChild </li>
                                    <li>Siblings & insertBefore </li>
                                </Styled.QualificationList>

                                <h5>Objektorientierte Programmierung mit JavaScript</h5>
                                <Styled.QualificationList>
                                    <li>Grundpfeiler der objektorientierten Programmierung: Kapselung, Vererbung, Polymorphismus und Abstraktion</li>
                                    <li>Abgrenzung zur funktionalen Programmierung </li>
                                    <li>Klassische und alternative Implementierungen </li>
                                    <li>Statische und abstrakte Methoden </li>
                                    <li>Mutable vs. immutable Objects </li>
                                    <li>State-Management </li>
                                </Styled.QualificationList>
                                
                                <h5>Backend-Programmierung mit Javascript</h5>
                                <Styled.QualificationList>
                                    <li>Node.js</li>
                                    <li>Webserver mit Express</li>
                                    <li>MongoDB und Mongoose</li>
                                    <li>Asynchrone Programmierung/AJAX</li>
                                    <li>Datenbank-Middleware </li>
                                    <li>interaktive Website mit EJS </li>
                                    <li>Sicherheit durch Middlewares </li>
                                    <li>WebSockets </li>
                                </Styled.QualificationList>
                                
                                <h5>Entwicklung eines Multiplayer-Browsergames mit Phaser, Express und Socket.IO</h5>
                                <Styled.QualificationList>
                                    <li>Spiele-Entwicklung </li>
                                    <li>Projektstruktur erstellen </li>
                                    <li>Phaser, Express und Socket.IO </li>
                                    <li>Objektorientierung </li>
                                </Styled.QualificationList>

                            </div>
                            <Styled.QualificationLink href="https://www.gfn.de/programmierung/webentwicklung/javascript-zertifizierung-gefoerdert/">hier geht es zur Kursbeschreibung direkt beim Anbieter</Styled.QualificationLink>
                            </Styled.ModalContainer>
                    </Modal>
                </Styled.QualificationCard>

                <Styled.QualificationCard>
                    <h4 className="card-heading">Python</h4>
                    <Styled.QualificationsImageContainer>
                        <Styled.QualificationsImage  
                            src={python}
                            alt="Python"
                            fill
                        />
                    </Styled.QualificationsImageContainer>
                    <Modal>
                        <Styled.ModalContainer>
                            <h4 className="card-heading">Python</h4>
                            <h3>Abschluss: Python</h3>
                            <h4>Vollzeit Bootcamp Remote 1 Monat</h4>
                            <h5>Anbieter: GFN GmbH </h5>
                            <div>
                                <h5>Kursinhalt:</h5>
                                <Styled.QualificationList>
                                    <li>Überblick über die Programmiersprachen (imperativ, deklarativ, prozedural, funktional usw. ) </li>
                                    <li>Grundlegende Sprachelemente </li>
                                    <li>Variablen und Datentypen verwenden </li>
                                    <li>Auf das Dateisystem zugreifen und Dateien verarbeiten </li>
                                    <li>Kontrollstrukturen (Schleifen, Verzweigungen etc.) verwenden </li>
                                    <li>Funktionen und Methoden verwenden und definieren </li>
                                    <li>Benutzeroberflächen erstellen </li>
                                    <li>Algorithmen erstellen </li>
                                    <li>Ablaufstrukturen nach DIN (Struktogramm) visualisieren </li>
                                    <li>Grundlage Datenbanken </li>
                                    <li>Softwareentwicklungsprozess (Einsatz von UML) </li>
                                    <li>praktische Umsetzung der Theorie in die Praxis mittels Python </li>
                                    <li>Ausblick objektorientierte Programmierung und Python</li>
                                </Styled.QualificationList>
                            </div>
                            <Styled.QualificationLink href="https://www.gfn.de/programmierung/softwareentwicklung/basiswissen-programmierung-schulung-gefoerdert/">hier geht es zur Kursbeschreibung direkt beim Anbieter</Styled.QualificationLink>
                            </Styled.ModalContainer>
                    </Modal>
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