import React, { useState } from "react";

const CustomTooltip = ({ children, title, arrow = false }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div
                    className={`bg-custom-white mb-2 absolute border-2 border-gray-800 bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded-md transition-opacity duration-300 ${
                        arrow ? "tooltip-arrow" : ""
                    } ${visible ? "opacity-100" : "opacity-0"}`}
                >
                    {title}
                </div>
            )}
        </div>
    );
};

export default CustomTooltip;
