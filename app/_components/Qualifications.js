import Image from "next/image";
import Link from "next/link";
import webdesign from "../images/webdesign.JPG"
import javascript from "../images/javascript.JPG"

export default function Qualifications() {
    return (
        <>
            <h2 className="heading-big">Qualifications</h2>
            <h1>Qualifikationen</h1>

            <div className="container-cards">

                <Link href="#" className="card">
                    <div className="image-container">
                        <span>Zertifikat Web-Designer</span>
                        <Image 
                            src={webdesign} 
                            alt="Zertifikat Web-Designer"
                            layout="responsive"
                            objectFit="cover"
                            className="image"
                        />
                    </div>
                </Link>

                <Link href="#" className="card">
                    <div className="image-container">
                        <span>Zertifikat Softwareentwicklerin JavaScript</span>
                        <Image 
                            src={javascript} 
                            alt="Zertifikat Softwareentwicklerin JavaScript"
                            layout="responsive"
                            objectFit="cover"
                            className="image"
                        />
                    </div>
                </Link>
            
            <a href="#" target="_blank" className="card">
                <h3>Zertifikat Softwareentwicklerin JavaScript</h3>
            </a>

            <a href="#" target="_blank" className="card">
                <h3>coming soon: Web-Developer</h3>
            </a>

            <a href="#" target="_blank" className="card">
                <h3>JS Udemy</h3>
            </a>

            <a href="#" target="_blank" className="card">
                <h3>React Udemy</h3>
            </a>
                    
        </div>
        </>
    );
}