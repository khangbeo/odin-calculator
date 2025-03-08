/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                pasteltheme: {
                    primary: "#FFB6C1", // Light pink
                    secondary: "#FFD9E3", // Soft baby pink
                    accent: "#A7E7E7", // Light teal
                    neutral: "#FDF6EC", // Creamy white
                    "base-100": "#FFF1F1", // Softest pink for backgrounds
                    info: "#A8DADC", // Pastel blue
                    success: "#B5EAD7", // Soft mint green
                    warning: "#FFD59E", // Warm peach
                    error: "#FFAAA7", // Soft coral red
                },
            },
        ],
    },
};
