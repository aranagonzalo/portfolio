"use client";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

const Tag = ({ name }) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(scope.current, { opacity: 1 }, { stagger: 1 });
    });

    return (
        <motion.div
            ref={scope}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-sm rounded-lg border-2 text-custom-black/60 border-custom-black/10 bg-custom-white/30 p-2"
        >
            {name}
        </motion.div>
    );
};

export default Tag;
