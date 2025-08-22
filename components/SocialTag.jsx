import React from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";
import { JetBrains_Mono } from "next/font/google";
import { Copy, Download } from "lucide-react";
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

const SocialTag = ({ title }) => {
    const link =
        title === "Linkedin"
            ? "https://linkedin.com/in/aranagonzalo"
            : title === "Github"
            ? "https://github.com/aranagonzalo"
            : title === "Whatsapp"
            ? "https://api.whatsapp.com/send?phone=51946060032&text=¡Hola!%20Visité%20tu%20portafolio%20web%20y%20me%20gustaría%20contactar%20contigo."
            : title === "Descargar CV"
            ? "/pdf/cv.pdf"
            : "gonzaloaranam@gmail.com";

    const isExternal =
        title === "Linkedin" ||
        title === "Github" ||
        title === "Whatsapp" ||
        title === "Descargar CV";

    const handleClick = async (e) => {
        if (!isExternal) {
            e.preventDefault();
            try {
                await navigator.clipboard.writeText(link);
                toast.success("Copiado al portapapeles.");
            } catch (err) {
                toast.error("Error al copiar.");
            }
        }
    };

    return (
        <>
            <Toaster
                richColors
                position="top-right"
                toastOptions={{
                    style: {
                        backgroundColor: "rgba(253,255,252,0.6)",
                        color: "#000",
                        border: "2px solid #000",
                        fontSize: "14px",
                    },
                    className: `pointer-events-none shadow p-2 ${jetBrainsMono.className}`,
                }}
            />
            <motion.a
                onClick={handleClick}
                target={isExternal ? "_blank" : undefined}
                initial={{ x: -50, opacity: 0, scale: 1 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="justify-center ml-3 flex gap-2 items-center bg-custom-white/60 border-2 rounded-lg p-2 cursor-pointer"
                href={link}
            >
                {title === "Linkedin" ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                ) : title === "Github" ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                ) : title === "Whatsapp" ? (
                    <img src="/icons/whatsapp.png" className="w-4 h-4" />
                ) : title === "Descargar CV" ? (
                    <Download className="w-4 h-4" />
                ) : (
                    <Copy className="w-4 h-4" />
                )}
                <p>{title}</p>
            </motion.a>
        </>
    );
};

export default SocialTag;
