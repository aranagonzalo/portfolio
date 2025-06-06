import React from "react";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className="w-full bg-custom-white/40 h-20 flex items-center px-20 justify-between border-t-2 border-custom-black text-green-900">
            <p>{date}</p>
            <p className="text-xs font-light text-green-800">
                Desarrollado por{" "}
                <a
                    href="https://www.linkedin.com/in/aranagonzalo"
                    className="underline"
                >
                    Gonzalo Arana
                </a>
            </p>
        </div>
    );
};

export default Footer;
