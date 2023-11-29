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
                className={`${jetBrainsMono.className} bg-custom-white text-gray-950 relative overflow-hidden`}
            >
                <div className="bg-green-500/25 absolute top-[16rem] -z-10 right-[-1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[28rem] xl:right-[-15rem] 2xl:right-[-5rem]"></div>
                <div className="bg-yellow-500/10 absolute top-[-3rem] -z-10 left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
