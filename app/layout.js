import Navigation from "@/app/_components/Navigation";
import Footer from "./_components/Footer";

import "@/app/_styles/globals.css"

import {Anonymous_Pro} from "next/font/google";

const googlefontheading = Anonymous_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

// ----- FONT AWSOME -----
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NavigationNew from "./_components/NavigationNew";
import Navbar from "./_components/Navbar";

config.autoAddCss = false;

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// library.add(fab, faCoffee);

// Nun können Sie die Icons wie folgt verwenden:
{/* <FontAwesomeIcon icon={['fab', 'twitter']} />
<FontAwesomeIcon icon="coffee" /> */}



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
        <body className={`${googlefontheading.className}`}>
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