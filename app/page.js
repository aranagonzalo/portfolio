"use client";

import SocialTag from "@/components/SocialTag";
import Tag from "../components/Tag";
import { animate, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import CustomTooltip from "@/components/CustomTooltip";
import { projects, experience } from "@/utils";
import ProjectCard from "@/components/ProjectCard";
import { MapPin } from "lucide-react";

const tecnologies = [
    "Typescript",
    "Next.js",
    "OpenAI API",
    "React",
    "React Query",
    "Python",
    "Framer Motion",
    "Google Maps API",
    "D3.js",
    "Django",
    "Apollo",
    "GraphQL",
    "TailwindCSS",
    "Redux",
    "Node.js",
    "Express",
    "Prisma",
    "PostreSQL",
    "Supabase",
];

const softSkillsAndTools = [
    "Pensamiento crítico",
    "Comunicación efectiva",
    "Trabajo remoto",
    "Adaptabilidad",
    "Gestión del tiempo",
    "Agilidad (Scrum)",
    "Documentación clara",
    "Feedback constructivo",
    "Aprendizaje continuo",
    "UX-first mindset",
    "Git avanzado",
    "CI/CD",
    "Slack",
    "Notion",
    "Figma",
    "Proactividad",
    "Orientación a resultados",
];

export default function Home() {
    const ref = useRef(null);
    const titleRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const sequence = [
            [ref.current, { opacity: 1 }, { x: { duration: 1 } }],
            [titleRef.current, { opacity: 1 }],
        ];

        animate(sequence, { duration: 1 });
    }, []);

    const [animatedText, setAnimatedText] = useState("");
    const fullText = "ddiseños que atrapan.";
    const descriptionRef = useRef(null);

    useEffect(() => {
        setAnimatedText("");
        let index = 0;

        const interval = setInterval(() => {
            if (index + 2 > fullText.length) return;
            setAnimatedText((prev) => prev + fullText[index]);
            index++;
        }, 50);

        return () => clearInterval(interval);
    }, [hovered]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-40 px-3 md:px-60 overflow-hidden max-w-screen relative">
            <div className="bg-green-500/25 absolute top-[16rem] -z-10 right-[-1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[28rem] xl:right-[-15rem] 2xl:right-[-5rem]"></div>
            <div className="bg-yellow-500/10 absolute top-[-3rem] -z-10 left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
            {/* Sobre mi */}
            <section
                id="sobre-mi"
                className="flex-col z-10 max-w-5xl w-full md:w-[540px] items-center justify-start text-sm md:flex mb-20 md:mb-32"
            >
                <motion.h1
                    ref={titleRef}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="self-start text-[32px] md:text-[40px] text-custom-black font-medium tracking-tight mb-4"
                >
                    Gonzalo Arana
                </motion.h1>
                <div className="text-[12px] flex gap-1 items-center justify-start text-custom-black/70 self-start mb-8">
                    <MapPin className="w-3 h-3" />
                    <p>Lima, Perú</p>
                </div>

                <div className="overflow-hidden md:overflow-visible mb-8 w-full md:w-[540px] bg-gradient-to-l from-green-50 to-yellow-50 gap-6 h-60 md:h-48 relative flex flex-col justify-between px-3 md:px-6 py-4 border-2 border-black rounded-lg shadow">
                    <h3 className="text-base font-bold text-custom-black/90 ml-1">
                        Desarrollador Full-Stack
                    </h3>
                    <h4 className="mr-30 absolute top-10 text-[10px] tracking-tight text-green-600">
                        (Con foco en Front-End)
                    </h4>
                    <p
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        ref={descriptionRef}
                        className="md:h-20 w-[60%] text-sm font-normal text-custom-black/70 ml-1 max-w-xs"
                    >
                        Desarrollo productos web diseñados con atención al
                        detalle para ofrecer experiencias inmersivas y{" "}
                        {/* <span className="text-custom-white/0"> a </span> */}
                        <span className="font-medium text-green-600">
                            {animatedText}
                        </span>
                    </p>
                    <motion.img
                        ref={ref}
                        className="m-0 -mt-8 p-0 absolute -right-4 md:right-0 -bottom-4 md:bottom-0 w-[180px] md:w-[220px]"
                        src="/gonzalo.png"
                        width={220}
                        height={220}
                        alt="Profile picture"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    />
                </div>
                <div className="flex-wrap flex gap-4 md:gap-0 self-end">
                    <SocialTag title="Github" />
                    <SocialTag title="Linkedin" />
                    <CustomTooltip title="Click para copiar" arrow>
                        <div>
                            <SocialTag title="gonzaloaranam@gmail.com" />
                        </div>
                    </CustomTooltip>
                </div>
                <div className="flex gap-0 mt-3 self-end">
                    <SocialTag title="Whatsapp" />
                    <SocialTag title="Descargar CV" />
                </div>
            </section>
            {/* Tecnologias */}
            <section className="z-10 max-w-5xl w-full items-center justify-center gap-12 text-sm flex flex-col mb-32">
                <h2 className="text-center">
                    Actualmente trabajo con las siguientes{" "}
                    <span className="text-red-500 font-bold">tecnologias:</span>
                </h2>
                <div className="flex flex-wrap gap-4 max-w-lg justify-center">
                    {tecnologies.map((t, i) => (
                        <Tag key={`${t}-${i}`} name={t} />
                    ))}
                </div>
            </section>
            {/* Experiencia */}
            <section id="experiencia" className="flex flex-col relative">
                <div className="bg-green-500/25 absolute top-[36rem] -z-10 right-[-1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[28rem] xl:right-[-15rem] 2xl:right-[-5rem]"></div>
                <div className="bg-yellow-500/10 absolute top-[-3rem] -z-10 left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
                <motion.h1
                    ref={titleRef}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="self-end text-[40px] text-custom-black font-medium tracking-tight mb-6"
                >
                    Experiencia
                </motion.h1>
                {experience.map((project, i) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                        reverse={i % 2 !== 0}
                    />
                ))}
            </section>
            {/* Proyectos */}
            <section id="proyectos" className="flex flex-col relative">
                <div className="bg-green-500/25 absolute top-[36rem] -z-10 right-[-1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[28rem] xl:right-[-15rem] 2xl:right-[-5rem]"></div>
                <div className="bg-yellow-500/10 absolute top-[-3rem] -z-10 left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
                <motion.h1
                    ref={titleRef}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="self-start text-[40px] text-custom-black font-medium tracking-tight mb-6"
                >
                    Proyectos
                </motion.h1>
                {projects.map((project, i) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                        reverse={i % 2 === 0}
                    />
                ))}
            </section>
            {/* Habilidades */}
            <section
                id="habilidades"
                className="z-10 max-w-5xl w-full items-center justify-center gap-12 text-sm md:flex flex-col mb-32"
            >
                <h2>
                    Algunas de mi habilidades blandas y{" "}
                    <span className="text-red-500 font-bold">
                        herramientas:
                    </span>
                </h2>
                <div className="flex flex-wrap gap-4 max-w-lg justify-center">
                    {softSkillsAndTools.map((t, i) => (
                        <Tag key={`${t}-${i}`} name={t} />
                    ))}
                </div>
            </section>
        </main>
    );
}
