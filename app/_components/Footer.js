import Link from "next/link";

export default function Footer() {
    return (

        <>
        <footer>
            <div>
                <div>
                <Link href="/impressum" className=" hover:bg-white hover:text-black rounded-lg p-2">Impressum</Link>
                </div>
                <div>
                <Link href="/contact" className=" hover:bg-white hover:text-black rounded-lg p-2">Kontakt</Link>
                </div>
            </div>
            <p>
                created wit next.js & <span>&#10084;</span> by jb
            </p>
        </footer>
        </>
    );

}