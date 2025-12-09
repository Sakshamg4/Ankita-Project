/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                richBlack: "#000000",
                metallicGold: {
                    DEFAULT: "#D4AF37",
                    dark: "#CBA135",
                    light: "#E5C564",
                },
                softWhite: "#F5F5F5",
                deepCharcoal: "#1A1A1A",
                glassBlack: "rgba(26, 26, 26, 0.6)",
            },
            fontFamily: {
                heading: ["Playfair Display", "serif"],
                body: ["Poppins", "sans-serif"],
            },
            boxShadow: {
                goldGlow: "0 6px 30px rgba(212,175,55,0.2)",
            },
            backgroundImage: {
                'luxury-gradient': 'linear-gradient(to right, #000000, #1A1A1A)',
                'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #CBA135 100%)',
            }
        },
    },
    plugins: [],
}
