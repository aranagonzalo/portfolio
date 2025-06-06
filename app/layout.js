import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
    title: "Gonzalo Arana - Portfolio",
    description: "Professional Portafolio - Gonzalo Arana",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${jetBrainsMono.className} bg-custom-white text-gray-950 relative max-w-screen`}
            >
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
