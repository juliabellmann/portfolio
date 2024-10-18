import Navigation from "@/app/_components/Navigation";

import "@/app/_styles/globals.css"

export const metadata = {
    title: {
        template: "%S - JB WebFolio",
        default: "Welcome - JB Portfolio",
    },
    description: "Portfolio von JB mit Beispielprojekten",
  };

export default function RootLayout({children}) {
    return (
        <html lang="de">
        <body className="bg-background text-primary-400">
            <header>
            <Navigation />
            </header>

            <main>
                {children}
            </main>

            <footer>Copyright by JB</footer>
            
        </body>
        </html>
    );
}