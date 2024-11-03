import Image from "next/image";
import travellist from "../images/faraway2.JPG"
import budgetplanner from "../images/budgetplanner.JPG"
import swearingplant from "../images/swearingplant.JPG"
import Link from "next/link";

export default function Projects() {
    return (
        <>
            <h2 className="heading-big">projects</h2>
            <h1>Übersicht der Projekte</h1>

            <p>Im folgenden sind Beispielprojekte aufgeführt. Beim Anklicken einer Karte wird sich ein neuer Reiter öffnen, in dem das Projekt betrachtet und ausprobiert werden kann.</p>

            <div className="container-cards">

                <Link href="https://travel-list-orpin.vercel.app/" target="_blank" className="card">
                    <h4 className="card-heading">travel list</h4>
                    <div className="image-container">
                        <Image 
                            src={travellist} 
                            alt="Projekt 'Travel-List' "
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
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
                            style={{ objectFit: 'cover' }}
                            className="image"
                        />
                    </div>
                    <span>created with JS</span>
                </Link>
                
        
                <div  className="card">
                    <h4 className="card-heading">swearing plant</h4>
                    <div className="image-container">
                        <Image 
                            src={swearingplant} 
                            alt="Projekt 'Budget-Planner' "
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                            className="image"
                        />
                    </div>
                        <span>created with Arduino</span>
                </div>

                <Link href="#" target="_blank" className="card">
                    <h4>coming soon</h4>
                </Link>

                <Link href="#" target="_blank" className="card">
                    <h4>coming soon</h4>
                </Link>

                <Link href="#" target="_blank" className="card">
                    <h4>coming soon</h4>
                </Link>
                        
            </div>
        </>
    );
}