import React from "react";
import { motion } from "framer-motion";

const ListItem = ({
    borderStyle,
    borderColor,
    text,
    targetId,
    isMobile = false,
    onSelect,
}) => {
    const handleClick = () => {
        const el = document.getElementById(targetId);
        if (el) {
            const offset = 150;
            const topPos =
                el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: topPos, behavior: "smooth" });
        }
        onSelect?.();
    };

    return (
        <motion.li
            onClick={handleClick}
            initial={{ fontSize: "15px", y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ fontSize: "17px", fontWeight: 600 }}
            className={[
                "text-custom-black font-normal cursor-pointer hover:font-medium whitespace-nowrap",
                isMobile ? "py-5 px-4" : "py-1 px-4 md:px-8",
                borderStyle,
                borderColor,
            ].join(" ")}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >
            {text}
        </motion.li>
    );
};

export default ListItem;
