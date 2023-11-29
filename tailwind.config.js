/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            "custom-white": {
                DEFAULT: "#fdfffc",
            },
            "custom-black": {
                DEFAULT: "#011627",
            },
            red: {
                50: "#fdedee",
                100: "#f7b5bd",
                200: "#f3909b",
                300: "#ef6b7b",
                400: "#ec465a",
                500: "#e71d36",
                600: "#cb152b",
                700: "#a61123",
                800: "#810b1d",
                900: "#5c0a13",
                950: "#250408",
            },
            yellow: {
                50: "#fff7eb",
                100: "#ffe6c2",
                200: "#ffd599",
                300: "#ffc370",
                400: "#ffb347",
                500: "#ff9f1c",
                600: "#f58f00",
                700: "#cc7700",
                800: "#a35f00",
                900: "#663c00",
                950: "#291800",
            },
            green: {
                50: "#eefdfa",
                100: "#def7f5",
                200: "#bdefea",
                300: "#8be4db",
                400: "#5ad8cc",
                500: "#2ec4b6",
                600: "#27a599",
                700: "#1f847a",
                800: "#17635c",
                900: "#10423d",
                950: "#08211f",
            },
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
