import Link from "next/link";

export default function Footer() {
    return (

        <>
        <footer>
            <div>
                <div>
                <Link href="/impressum">Impressum</Link>
                </div>
                <div>
                <Link href="/contact">Kontakt</Link>
                </div>
            </div>
            <div>
                created wit next.js & &#10084; by jb
            </div>
        </footer>
        </>
    );

}