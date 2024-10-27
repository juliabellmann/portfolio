import Image from "next/image";
import Link from "next/link";
import webdesign from "../images/webdesign.JPG"
import javascript from "../images/javascript.JPG"

export default function Qualifications() {
    return (
        <>
            <h2 className="heading-big">qualifications</h2>
            <h1>Qualifikationen</h1>

            <div className="container-cards">

                <Link href="#" className="card">
                    <h4 className="card-heading">Web&nbsp;-&nbsp;Designer</h4>
                    <div className="image-container">
                        <Image 
                            src={webdesign} 
                            alt="Zertifikat Web-Designer"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                            className="image"
                        />
                    </div>
                    {/* <span>-</span> */}
                </Link>

                <Link href="#" className="card">
                    <h4 className="card-heading">Softwareentwicklerin JavaScript</h4>
                    <div className="image-container">
                        <Image 
                            src={javascript} 
                            alt="Zertifikat Softwareentwicklerin JavaScript"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                            className="image"
                            />
                    </div>
                    {/* <span>-</span> */}
                </Link>
            
            <Link href="#" target="_blank" className="card">
                <h4 className="card-heading">coming soon: Web&nbsp;-&nbsp;Developer</h4>
                <div className="image-container">
                    #
                </div>
                {/* <span>-</span> */}
            </Link>

            <Link href="#" target="_blank" className="card">
                <h4>JS Udemy</h4>
            </Link>

            <Link href="#" target="_blank" className="card">
                <h4>React Udemy</h4>
            </Link>

            <Link href="#" target="_blank" className="card">
                <h4>#</h4>
            </Link>
                    
        </div>
        </>
    );
}