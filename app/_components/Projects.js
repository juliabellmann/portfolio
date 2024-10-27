import Image from "next/image";
import travellist from "../images/faraway2.JPG"
import budgetplanner from "../images/budgetplanner.JPG"
import Link from "next/link";

export default function Projects() {
    return (
        <>
            <h2 className="heading-big">Projects</h2>
            <h1>Übersicht der Projekte</h1>

            <p>Im folgenden sind Beispielprojekte aufgeführt. Beim Anklicken einer Karte wird sich ein neuer Reiter öffnen, in dem das Projekt betrachtet und ausprobiert werden kann.</p>

            <div className="container-cards">

                <Link href="https://travel-list-orpin.vercel.app/" target="_blank" className="card">
                    <div className="image-container">
                        <span>travel list</span>
                        <Image 
                            src={travellist} 
                            alt="Projekt 'Travel-List' "
                            layout="responsive"
                            objectFit="cover"
                            className="image"
                        />
                        <span>created with React</span>
                    </div>
                </Link>

                <Link href="https://budget-planner-blond.vercel.app/" target="_blank" className="card">
                    <div className="image-container">
                        <span>budget planner</span>
                        <Image 
                            src={budgetplanner} 
                            alt="Projekt 'Budget-Planner' "
                            layout="responsive"
                            objectFit="cover"
                            className="image"
                        />
                        <span>created with JS</span>
                    </div>
                </Link>
                
        
                <Link href="#" target="_blank" className="card">
                    <div className="image-container">
                        <h3>swearing plant</h3>
                        <span>created with Arduino</span>
                    </div>
                </Link>

                <Link href="#" target="_blank" className="card">
                    <h3>coming soon</h3>
                </Link>

                <Link href="#" target="_blank" className="card">
                    <h3>coming soon</h3>
                </Link>

                <Link href="#" target="_blank" className="card">
                    <h3>coming soon</h3>
                </Link>
                        
            </div>
        </>
    );
}