// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// import glightbox
import 'glightbox/dist/css/glightbox.css';


import "./globals.css";
import {Playfair_Display} from "next/font/google";

import TopBar from './components/TopBar'; // falls Datei in app/components/TopBar.tsx
import Header from './components/Header';
import BackToTopBtn from './components/BackToTopBtn';
import Footer from './sections/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Stockly",
  description: "Plattform für Aktienanlage und Finanzberatung",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="de">
      <body className={playfair.className}>
        <Header/>
        <TopBar/>
        {children}
        <Footer/>
        <BackToTopBtn/> 
      </body>
      {/* <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9KwDrMNeT87bh950GNyZPhcTNXj1NW7RuBCsyN/o0jIpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script> */}
    </html>
  );
}
