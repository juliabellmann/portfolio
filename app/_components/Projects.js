import Image from "next/image";
import travellist from "../images/faraway2.JPG"
import wildoasis from "../images/wildoasis.JPG"
import budgetplanner from "../images/budgetplanner.JPG"
import leaflogger from "../images/leaflogger.JPG"
import swearingplant from "../images/swearingplant.JPG"
import workflowwizzard from "../images/workflow-wizzard.jpeg"
import usepopcorn from "../images/usepopcorn.JPG"
import Link from "next/link";

export default function Projects() {
    return (
        <>
            <h2 className="heading-big">projects</h2>
            <h1>Übersicht der Projekte</h1>

            <p className="mb-10">Im folgenden sind Beispielprojekte aufgeführt. Beim Anklicken einer Karte wird sich ein neuer Reiter öffnen, in dem das Projekt betrachtet und ausprobiert werden kann.</p>

            <div className="container-cards">

                <Link href="https://wild-oasis-booking-demo.vercel.app/" target="_blank" className="card">
                    <h4 className="card-heading">The Wild Oasis</h4>
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
                        <span>created with Next.js, app-router & Supabase</span>
                </Link>
                
                <Link href="https://travel-list-orpin.vercel.app/" target="_blank" className="card">
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
                </Link>

                <Link href="https://budget-planner-blond.vercel.app/" target="_blank" className="card">
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
                </Link>

                <Link href="https://leaf-logger-jb.vercel.app/" target="_blank" className="card">
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
                </Link>
                
                <div  className="card">
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
                    <span className="card-txt">dieses Projekt ist leider nicht ohne Arduino Teile zu testen</span>
                </div>

                <Link href="https://the-workflow-wizard.vercel.app/" target="_blank" className="card">
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
                </Link>
                
                <Link href="https://use-popcorn-app-nine.vercel.app/" target="_blank" className="card">
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
                </Link>

                <Link href="#" target="_blank" className="card">
                    <h4>Web-Shop</h4>
                    <h4>coming soon</h4>
                </Link>

                <Link href="#" target="_blank" className="card">
                    <h4>coming soon</h4>
                </Link>
                       
            </div>
        </>
    );
}