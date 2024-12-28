"use client";

import Image from "next/image";
import travellist from "../images/faraway2.JPG"
import wildoasis from "../images/wildoasis.JPG"
import budgetplanner from "../images/budgetplanner.JPG"
import leaflogger from "../images/leaflogger.JPG"
import swearingplant from "../images/swearingplant.JPG"
import workflowwizzard from "../images/workflow-wizzard.jpeg"
import usepopcorn from "../images/usepopcorn.JPG"
import Modal from "./Modal";

import * as Styled from "./ProjectsStyles";

export default function Projects() {
    return (
        <>
            <h2 className="heading-big">projects</h2>
            <h1>Übersicht der Projekte</h1>

            <p className="mb-10">Im folgenden sind Beispielprojekte aufgeführt.</p>

            <Styled.WrapperProjects>

                <Styled.ProjectCard>
                    <h4 className="card-heading font-josefinesans">The Wild Oasis</h4>
                    <Styled.ProjectImageContainer>
                        <Styled.ProjectImage 
                            src={wildoasis} 
                            alt="Projekt 'The Wild Oasis - Booking-Demo' "
                            fill
                            />
                    </Styled.ProjectImageContainer>

                    <Modal>
                        <Styled.ModalContainer>
                            <h4 className="card-heading font-josefinesans">The Wild Oasis</h4>
                            <Styled.LinkProject href="https://wild-oasis-booking-demo.vercel.app/" target="_blank">
                                <Styled.ModalImage>
                                    <Image 
                                        src={wildoasis} 
                                        alt="Projekt 'The Wild Oasis - Booking-Demo' "
                                        fill
                                    />
                                </Styled.ModalImage>
                            </Styled.LinkProject>
                            <div>
                                <h6>To open the project in a new tab and try it out:</h6>
                            </div>
                            <Styled.ModalLink href="https://wild-oasis-booking-demo.vercel.app/" target="_blank">
                                hier klicken | click here
                            </Styled.ModalLink>
                            <Styled.Hr></Styled.Hr>
                            <h4>Used Skills</h4>
                            <Styled.ModalSkillsContainer>
                                <Styled.ModalSkills>
                                    <Styled.ModalSVG role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></Styled.ModalSVG>
                                    <h4>CSS3</h4>
                                </Styled.ModalSkills>
                                <Styled.ModalSkills>
                                    <Styled.ModalSVG role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></Styled.ModalSVG>
                                    <h4>React</h4>
                                </Styled.ModalSkills>
                                <Styled.ModalSkills>
                                    <Styled.ModalSVG role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></Styled.ModalSVG>
                                    <h4>Next.js (App Router)</h4>
                                </Styled.ModalSkills>
                                <Styled.ModalSkills>
                                    <Styled.ModalSVG role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Supabase</title><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/></Styled.ModalSVG>
                                    <h4>Supabase</h4>
                                </Styled.ModalSkills>
                            </Styled.ModalSkillsContainer>
                            <Styled.Hr></Styled.Hr>
                            <h4>About the Project</h4>
                            <p>Dieses Projekt entstand mit Hilfe des Udemy Kurses XY von XY. Es ist eine Seite für die Buchung von Cabinen mit Login. </p>
                        </Styled.ModalContainer>
                    </Modal>
                </Styled.ProjectCard>
                
                <Styled.ProjectCard>
                    <h4 className="card-heading font-monoton" >Travel List</h4>
                    <Styled.ProjectImageContainer>
                        <Styled.ProjectImage 
                            src={travellist} 
                            alt="Projekt 'Travel-List' "
                            fill
                            />
                    </Styled.ProjectImageContainer>

                    <Modal>
                        <Styled.ModalContainer>
                            <h4 className="card-heading font-monoton">travel list</h4>
                            <Styled.LinkProject href="https://travel-list-orpin.vercel.app/" target="_blank">
                                <Styled.ModalImage>
                                    <Image 
                                        src={travellist} 
                                        alt="Projekt 'Travel-List' "
                                        fill
                                    />
                                </Styled.ModalImage>
                            </Styled.LinkProject>
                            <div>
                                <h6>To open the project in a new tab and try it out:</h6>
                            </div>
                            <Styled.ModalLink href="https://travel-list-orpin.vercel.app/" target="_blank">
                                hier klicken | click here
                            </Styled.ModalLink>
                            <Styled.Hr></Styled.Hr>
                            <h4>Used Skills</h4>
                            <Styled.ModalSkillsContainer>
                                <Styled.ModalSkills>
                                    <Styled.ModalSVG role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></Styled.ModalSVG>
                                    <h4>CSS3</h4>
                                </Styled.ModalSkills>
                                <Styled.ModalSkills>
                                    <Styled.ModalSVG role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></Styled.ModalSVG>
                                    <h4>React</h4>
                                </Styled.ModalSkills>
                            </Styled.ModalSkillsContainer>
                            <Styled.Hr></Styled.Hr>
                            <h4>About the Project</h4>
                            <p>Dieses Projekt entstand mit Hilfe des Udemy Kurses XY von XY. Es ist eine Seite für die Erstellung einer eigenen Travel List. Diese wird lokal auf Ihrem Computer im Local-Storage gespeichert. Um diesen zurückzusetzen können Sie entweder den Local-Storage oder die Browserhistorie löschen. </p>
                        </Styled.ModalContainer>
                    </Modal>
                </Styled.ProjectCard>

                <Styled.ProjectCard>
                        <h4 className="card-heading font-amaticsc">budget planner</h4>
                        <Styled.ProjectImageContainer>
                            <Styled.ProjectImage 
                                src={budgetplanner} 
                                alt="Projekt 'Budget-Planner' "
                                fill
                                />
                        </Styled.ProjectImageContainer>

                    <Modal>
                        <Styled.ModalContainer>
                            <h4 className="card-heading font-amaticsc">budget planner</h4>
                            <Styled.LinkProject href="https://budget-planner-blond.vercel.app/" target="_blank">
                                <Styled.ModalImage>
                                    <Image 
                                        src={budgetplanner} 
                                        alt="Projekt 'Budget-Planner' "
                                        fill
                                    />
                                </Styled.ModalImage>
                            </Styled.LinkProject>
                            <div>
                                <span>created with JS</span>
                                <p> more informations coming soon </p>
                            </div>
                        </Styled.ModalContainer>
                    </Modal>
                </Styled.ProjectCard>

                <Styled.ProjectCard>
                    <h4 className="card-heading">leaf logger</h4>
                    <Styled.ProjectImageContainer>
                        <Styled.ProjectImage 
                            src={leaflogger} 
                            alt="Projekt 'Leaf-Logger' "
                            fill
                            />
                    </Styled.ProjectImageContainer>

                    <Modal>
                        <Styled.ModalContainer>
                            <h4 className="card-heading">leaf logger</h4>
                            <Styled.LinkProject href="https://leaf-logger-jb.vercel.app/" target="_blank">
                                <Styled.ModalImage>
                                    <Image 
                                        src={leaflogger} 
                                        alt="Projekt 'Leaf-Logger' "
                                        fill
                                    />
                                </Styled.ModalImage>
                            </Styled.LinkProject>
                            <div>
                                <span>created with next.js & pages router</span>
                                <p> more informations coming soon </p>
                            </div>
                        </Styled.ModalContainer>
                    </Modal>
                </Styled.ProjectCard>
                
                <Styled.ProjectCard>
                    <h4 className="card-heading">swearing plant</h4>
                    <Styled.ProjectImageContainer>
                        <Styled.ProjectImage 
                            src={swearingplant} 
                            alt="Projekt 'Budget-Planner' "
                            fill
                        />
                    </Styled.ProjectImageContainer>

                    <Modal>
                        <Styled.ModalContainer>
                            <h4 className="card-heading">swearing plant</h4>
                            <Styled.ProjectImageContainer>
                                <Styled.ProjectImage 
                                    src={swearingplant} 
                                    alt="Projekt 'Budget-Planner' "
                                    fill
                                />
                            </Styled.ProjectImageContainer>
                            <div>
                                <span>created with Arduino</span>
                                <p> more informations coming soon </p>
                            </div>
                        </Styled.ModalContainer>
                    </Modal>
                </Styled.ProjectCard>

                <Styled.ProjectCard>
                    <h4 className="card-heading">workflow wizzard</h4>
                    <Styled.ProjectImageContainer>
                        <Styled.ProjectImage 
                            src={workflowwizzard} 
                            alt="Projekt 'Workflow Wizzard' "
                            fill
                            />
                    </Styled.ProjectImageContainer>

                    <Modal>
                        <Styled.ModalContainer>
                            <h4 className="card-heading">workflow wizzard</h4>
                            <Styled.LinkProject href="https://the-workflow-wizard.vercel.app/" target="_blank">
                                <Styled.ModalImage>
                                    <Image 
                                        src={workflowwizzard} 
                                        alt="Projekt 'Workflow Wizzard' "
                                        fill
                                    />
                                </Styled.ModalImage>
                            </Styled.LinkProject>
                            <div>
                                <span>created with next.js & pages router</span>
                                <p> more informations coming soon </p>
                            </div>
                        </Styled.ModalContainer>
                    </Modal>
                </Styled.ProjectCard>

                <Styled.ProjectCard>
                        <h4 className="card-heading">usePopcorn</h4>
                        <Styled.ProjectImageContainer>
                            <Styled.ProjectImage 
                                src={usepopcorn} 
                                alt="Projekt 'usePopcorn' "
                                fill
                            />
                        </Styled.ProjectImageContainer>
                        
                        <Modal>
                            <Styled.ModalContainer>
                                <h4 className="card-heading">usePopcorn</h4>
                                <Styled.LinkProject href="https://use-popcorn-app-nine.vercel.app/" target="_blank">
                                    <Styled.ModalImage>
                                        <Image 
                                            src={usepopcorn} 
                                            alt="Projekt 'usePopcorn' "
                                            fill
                                        />
                                    </Styled.ModalImage>
                                </Styled.LinkProject>
                                <div>
                                    <span>created with react</span>
                                    <p> more informations coming soon </p>
                                </div>
                            </Styled.ModalContainer>
                        </Modal>
                </Styled.ProjectCard>

            <Styled.ProjectCard>
                <Styled.EmptyProject>
                    <h4>Web-Shop</h4>
                    <h4>coming soon</h4>
                </Styled.EmptyProject>
            </Styled.ProjectCard>
                       
            </Styled.WrapperProjects>
        </>
    );
}