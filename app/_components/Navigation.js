import Link from "next/link";

export default function Navigation() {
    return (
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projekt1">Projekt 1</Link></li>
        </ul>
    );
}