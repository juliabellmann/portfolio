import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { inter, robotoMono, montserrat, josefinSans, monoton, amaticSC, anonymousPro } from './lib/fonts';

import "@/app/_styles/globals.css"


// ----- FONT AWSOME -----
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

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
        <body className={`${inter.variable} ${robotoMono.variable} ${montserrat.variable} ${josefinSans.variable} ${monoton.variable} ${amaticSC.variable} ${anonymousPro.variable}`}>
            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <Footer></Footer>
            
        </body>
        </html>
    );
}