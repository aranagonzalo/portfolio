import Image from "next/image";
import SideBar from "../components/SideBar";
import Tag from "../components/Tag";

export default function Home() {
    const tecnologies = [
        "Javascript",
        "ReactJS",
        "NodeJS",
        "Express",
        "Redux",
        "NextJS",
        "TailwindCSS",
        "PostreSQL",
        "MySQL",
        "MongoDB",
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-40 px-60">
            <SideBar />
            <section className="z-10 max-w-5xl w-full items-center justify-center gap-12 text-sm md:flex mb-24">
                <div className="border-2 border-custom-black rounded-lg bg-green-500/10">
                    <Image
                        src="/profile.png"
                        width={220}
                        height={220}
                        alt="Gonzalo Arana in a suit picture"
                    />
                </div>
                <div className="flex flex-col h-[220px] justify-between">
                    <h1 className="text-5xl text-custom-black">
                        Gonzalo Arana
                    </h1>
                    <h3 className="text-lg text-custom-black/90 ml-1">
                        Full-Stack Developer
                    </h3>
                    <p className="text-sm text-custom-black/80 ml-1 max-w-sm">
                        I develop intricately designed web products with careful
                        attention to detail to deliver immersive and engaging
                        digital experiences.
                    </p>
                </div>
            </section>
            <section className="z-10 max-w-5xl w-full items-center justify-center gap-12 text-sm md:flex flex-col">
                <h2>
                    Im currently working with the following{" "}
                    <span className="text-red-500 font-bold">
                        technologies:
                    </span>
                </h2>
                <div className="flex flex-wrap gap-4 max-w-lg justify-center">
                    {tecnologies.map((t, i) => (
                        <Tag key={`${t}-${i}`} name={t} />
                    ))}
                </div>
            </section>
        </main>
    );
}
