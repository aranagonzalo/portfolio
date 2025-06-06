import React from "react";
import { motion } from "framer-motion";

const ListItem = ({ borderStyle, borderColor, text, targetId }) => {
    const handleClick = () => {
        const el = document.getElementById(targetId);
        if (el) {
            let offset = 150;

            const topPos =
                el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: topPos, behavior: "smooth" });
        }
    };
    return (
        <motion.li
            onClick={handleClick}
            initial={{ fontSize: "15px", y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ fontSize: "17px", fontWeight: 600 }}
            className={`py-1 px-4 md:px-8 ${borderStyle} ${borderColor} text-custom-black font-normal cursor-pointer hover:font-medium`}
        >
            {text}
        </motion.li>
    );
};

export default ListItem;
