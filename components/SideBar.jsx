"use client";
import { animate, motion } from "framer-motion";
import { useRef, useEffect } from "react";

const SideBar = () => {
    const side1 = useRef(null);
    const side2 = useRef(null);
    const side3 = useRef(null);

    useEffect(() => {
        const sequence = [
            [side1.current, { y: 0, opacity: 1 }],
            [side2.current, { y: 0, opacity: 1 }],
            [side3.current, { y: 0, opacity: 1 }],
        ];

        animate(sequence, { duration: 1.5 });
    }, []);

    return (
        <div className="fixed top-1/2 -translate-y-1/2 left-12 flex flex-col justify-between gap-40">
            <motion.a
                ref={side1}
                target="_blank"
                href="https://github.com/aranagonzalo"
                initial={{ y: -20, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="gap-2 hover:shadow-custom-black/20 flex items-center justify-center cursor-pointer shadow-lg shadow-black/[0.05] backdrop-blur border-2 border-custom-black rounded-lg p-3"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                </svg>
                <p className="text-base font-medium tracking-tight">About</p>
            </motion.a>
            <motion.a
                ref={side2}
                target="_blank"
                href="https://linkedin.com/in/aranagonzalo"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="gap-2 hover:shadow-custom-black/20 flex items-center justify-center cursor-pointer shadow-lg shadow-black/[0.05] backdrop-blur border-2 border-custom-black rounded-lg p-3"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 12h.01" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
                <p className="text-base font-medium tracking-tight">
                    Experience
                </p>
            </motion.a>
            <motion.a
                ref={side3}
                target="_blank"
                href="https://www.codewars.com/users/aranagonzalo"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="gap-2 hover:shadow-custom-black/20 flex items-center justify-center cursor-pointer shadow-lg shadow-black/[0.05] backdrop-blur border-2 border-custom-black rounded-lg p-3"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    <polyline points="10 2 10 10 13 7 16 10 16 2" />
                </svg>
                <p className="text-base font-medium tracking-tight">
                    Certifications
                </p>
            </motion.a>
        </div>
    );
};

export default SideBar;
