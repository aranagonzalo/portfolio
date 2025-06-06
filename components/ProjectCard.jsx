import { motion, useInView } from "framer-motion";
import Tag from "./Tag";
import { useState } from "react";
import { projectDetails } from "@/utils";
import { useRef } from "react";

export default function ProjectCard({
    title,
    subtitle,
    description,
    image,
    imageReverse,
    reverse,
    tags,
}) {
    const [flipped, setFlipped] = useState(false);
    const project = projectDetails.find((p) => p.title === title);
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-50% 0px -50% 0px", once: false });

    return (
        <motion.div
            ref={ref}
            className="mb-24"
            animate={
                inView
                    ? { scale: 1.04, rotateX: 2, rotateY: 1 }
                    : { scale: 1, rotateX: 0, rotateY: 0 }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <div
                className="relative w-[540px] h-48 perspective"
                onMouseEnter={() => setFlipped(true)}
                onMouseLeave={() => setFlipped(false)}
            >
                <motion.div
                    animate={{ rotateY: flipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-full transition-transform preserve-3d duration-[25ms] ease-in-out"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* FRONT FACE */}
                    <div className="absolute w-full h-full backface-hidden bg-gradient-to-l from-green-50 to-yellow-50 border-2 border-black rounded-lg shadow px-4 md:px-6 py-4 flex flex-col justify-between">
                        {reverse ? (
                            <div className="flex flex-col items-start h-full gap-2">
                                <motion.img
                                    className="absolute right-0 bottom-0 -mt-8"
                                    src={image}
                                    width={220}
                                    height={220}
                                    alt="Project image"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                />
                                <h3 className="text-base font-bold text-custom-black/90">
                                    {title}
                                </h3>
                                <p className="text-[14px] tracking-tight text-green-600">
                                    {subtitle}
                                </p>
                                <p className="w-[57%] text-xs font-normal text-custom-black/70">
                                    {description}
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-end h-full gap-2">
                                <h3 className="text-base font-bold text-custom-black/90">
                                    {title}
                                </h3>
                                <p className="text-[14px] tracking-tight text-green-600">
                                    {subtitle}
                                </p>
                                <p className="w-[57%] text-xs font-normal text-custom-black/70">
                                    {description}
                                </p>
                                <motion.img
                                    className="absolute left-0 bottom-0 -mt-8"
                                    src={image}
                                    width={220}
                                    height={220}
                                    alt="Project image"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                />
                            </div>
                        )}
                    </div>

                    {/* BACK FACE */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#444] border-2 border-black rounded-lg shadow flex flex-col justify-between px-3 py-2 overflow-visible text-white">
                        {/* Capa oscura con z-0 (ya es #444) */}
                        <div className="absolute inset-0 bg-[#4b5563] rounded-lg z-0 pointer-events-none" />

                        {/* Contenido textual */}
                        <div className="relative z-20 flex flex-col gap-2 items-start w-full h-full text-custom-white">
                            {project?.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm underline font-medium hover:scale-105 transition-transform drop-shadow"
                                >
                                    Visitar sitio →
                                </a>
                            )}

                            <ul className="text-xs text-white/80 border-t-2 !border-[#404955] pt-2 list-disc pl-5 space-y-1 w-full max-h-[80%] overflow-y-auto pr-1 scrollbar-thin scroll-box">
                                {project?.tasks?.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Imagen reflejada (misma posición) */}
                        <motion.img
                            className={`absolute bottom-0 -mt-8 ${
                                !reverse ? "right-0" : "left-0"
                            }`}
                            src={imageReverse}
                            width={220}
                            height={220}
                            alt="Project image"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        />

                        {/* MÁSCARA para ocultar parte interior de la imagen */}
                        <div
                            className={`absolute bottom-0 ${
                                !reverse ? "right-0" : "left-0"
                            } w-[220px] h-full bg-[#4b5563] rounded-lg z-10 pointer-events-none`}
                        />
                    </div>
                </motion.div>
            </div>
            <div
                className={`flex flex-wrap max-w-[540px] gap-2 -bottom-16 justify-start mt-4`}
            >
                {tags.map((tag) => (
                    <Tag key={tag} name={tag} />
                ))}
            </div>
        </motion.div>
    );
}
