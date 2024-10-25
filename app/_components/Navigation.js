import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <div>DevFolio</div>
            <div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/aboutme">About&nbsp;me</Link></li>
                    <li><Link href="/projects">Projekte</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                    <li><Link href="/github">GitHub</Link></li>
                </ul>
            </div>
        </nav>
    );
}


