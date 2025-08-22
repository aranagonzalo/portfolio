"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ListItem from "./ListItem";

const items = [
    {
        text: "Sobre mí",
        targetId: "sobre-mi",
        borderStyle: "border-r-2",
        borderColor: "border-green-500",
    },
    {
        text: "Experiencia",
        targetId: "experiencia",
        borderStyle: "border-r-2",
        borderColor: "border-green-500",
    },
    { text: "Proyectos", targetId: "proyectos" },
    {
        text: "Habilidades",
        targetId: "habilidades",
        borderStyle: "border-l-2",
        borderColor: "border-green-500",
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = useCallback(() => setOpen(false), []);

    // Cerrar con ESC
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") closeMenu();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [closeMenu]);

    return (
        <header className="z-[999] relative">
            <motion.nav
                initial={{ y: -100, opacity: 0, translateX: "-50%", scale: 1 }}
                animate={{ y: 0, opacity: 1, translateX: "-50%" }}
                className="fixed md:bg-custom-white/70 rounded-lg md:border-2 border-transparent md:backdrop-blur md:border-custom-black md:shadow-lg shadow-black/[0.05] mt-2 top-4 m-auto left-1/2 -translate-x-1/2 p-2 w-[95%] md:w-fit"
            >
                <div className="flex items-center justify-end md:justify-between">
                    {/* Desktop menu */}
                    <ul className="hidden md:flex justify-between flex-row gap-0 whitespace-nowrap">
                        {items.map((it, idx) => (
                            <ListItem
                                key={idx}
                                borderStyle={it.borderStyle}
                                borderColor={it.borderColor}
                                text={it.text}
                                targetId={it.targetId}
                            />
                        ))}
                    </ul>

                    {/* Botón hamburguesa (mobile) */}
                    <button
                        type="button"
                        aria-label={open ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen((v) => !v)}
                        className="bg-custom-white/70 backdrop-blur md:hidden inline-flex items-center justify-center rounded-lg border-2 border-custom-black px-3 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-black"
                    >
                        <div className="relative w-5 h-5">
                            <span
                                className={`absolute left-0 top-1 block h-[2px] w-5 bg-custom-black transition-transform ${
                                    open ? "translate-y-2 rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-2.5 block h-[2px] w-5 bg-custom-black transition-opacity ${
                                    open ? "opacity-0" : "opacity-100"
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-4 block h-[2px] w-5 bg-custom-black transition-transform ${
                                    open ? "-translate-y-2 -rotate-45" : ""
                                }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Overlay clickeable (mobile) */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            className="fixed inset-0 z-[998]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                        />
                    )}
                </AnimatePresence>

                {/* Panel mobile */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, y: -12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 25,
                            }}
                            className="md:hidden absolute right-[1px] mt-4 border-2 rounded-lg border-custom-black bg-custom-white/80 backdrop-blur shadow-lg shadow-black/10 px-2 w-full"
                        >
                            <ul className="flex flex-col whitespace-nowrap">
                                {items.map((it, idx) => (
                                    <ListItem
                                        key={`m-${idx}`}
                                        isMobile
                                        borderStyle={
                                            idx !== items.length - 1
                                                ? "border-b-2"
                                                : ""
                                        } // separadores como en desktop
                                        borderColor="border-green-500"
                                        text={it.text}
                                        targetId={it.targetId}
                                        onSelect={closeMenu}
                                    />
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    );
};

export default Navbar;
