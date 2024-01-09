/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      "dark-green": "#027333",
      "light-green": "#16F275",
      "dim-green": "#12A652",
      "off-white": "#F2F2F2",
      "dark-grey": "#262626",
    },
    gridTemplateRows: {
      "1fr-auto": "auto 1fr",
      "auto-1fr": "1fr auto",
    },
    extend: {
      animation: {
        slideIn: "slideIn .5s ease 0s 1 normal forwards",
        slideOut: "slideOut .5s ease 0s 1 normal forwards",
      },
      dropShadow: {
        "title-effect": "0 -20px 0px rgba(22,242,117,1.00)",
      },
      fontFamily: { roboto: ['"Roboto"'] },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(500px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(500px)" },
        },
      },
      margin: {
        128: "32rem",
      },
      maxWidth: {
        "screen-3xl": "1920px",
      },
    },
  },
};
