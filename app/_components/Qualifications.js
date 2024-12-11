import Image from "next/image";
import Link from "next/link";
import webdesign from "../images/webdesign.JPG"
import webdev from "../images/neuefische.JPG"
import javascript from "../images/javascript.JPG"
import udemy_js from "../images/udemy_js.jpg"
import udemy_react from "../images/udemy_react.jpg"
import udemy_fullstack from "../images/udemy_fullstack.jpg"

export default function Qualifications() {
    return (
        <>
            <h2 className="heading-big">qualifications</h2>
            <h1>Qualifikationen</h1>

            <div className="container-cards">

                <Link href="#" className="card">
                    <h4 className="card-heading">Web&nbsp;-&nbsp;Developer</h4>
                    <div className="image-container">
                    <Image 
                            src={webdev} 
                            alt="Zertifikat Web-Developer"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'contain' }}
                            className="image"
                        />
                    </div>
                    <span>-</span>
                </Link>

                <Link href="#" className="card">
                    <h4 className="card-heading">Web&nbsp;-&nbsp;Designer</h4>
                    <div className="image-container">
                        <Image 
                            src={webdesign} 
                            alt="Zertifikat Web-Designer"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'contain' }}
                            className="image"
                        />
                    </div>
                </Link>

                <Link href="#" className="card">
                    <h4 className="card-heading">Softwareentwicklerin JavaScript</h4>
                    <div className="image-container">
                        <Image 
                            src={javascript} 
                            alt="Zertifikat Softwareentwicklerin JavaScript"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'contain' }}
                            className="image"
                            />
                    </div>
                </Link>
            
                <Link href="https://www.udemy.com/certificate/UC-afe78176-09d7-4e00-a5e8-a9b470ae41da/" target="_blank" className="card">
                    <h4 className="card-heading">Udemy - JavaScript</h4>
                    <div className="image-container">
                            <Image 
                                src={udemy_js} 
                                alt="udemy - JavaScrpit Bescheinigung"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: 'contain' }}
                                className="image"
                            />
                        </div>
                </Link>

                <Link href="https://www.udemy.com/certificate/UC-3524b4f9-ecfd-4b06-aaf6-3930e323f882/" target="_blank" className="card">
                <h4 className="card-heading">Udemy - React, Next.js & co.</h4>
                    <div className="image-container">
                            <Image 
                                src={udemy_react} 
                                alt="udemy - React, Next.js und co. - Bescheinigung"
                                fill
                                sizes="(max-width: 768px) 100, 33vw"
                                style={{ objectFit: 'contain' }}
                                className="image"
                            />
                        </div>
                </Link>

                <Link href="https://www.udemy.com/certificate/UC-f49eee2e-6577-4523-aa09-f83008272956/" target="_blank" className="card">
                <h4 className="card-heading">Udemy - Full Stack Dev</h4>
                    <div className="image-container">
                            <Image 
                                src={udemy_fullstack} 
                                alt="udemy - Full Stack - Bescheinigung"
                                fill
                                // sizes="(max-width: 768px) 100, 33vw"
                                style={{ objectFit: 'contain' }}
                                className="image"
                            />
                        </div>
                </Link>

        </div>
        </>
    );
}