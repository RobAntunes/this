/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
      fontFamily: {
        unbounded: ["Unbounded"],
        poppins: ["Poppins"]
      },
      colors: {
        custom: {
          start: '#d4cad3',
          mid1: '#e9d4d1',
          mid2: '#f8ca9e',
          mid3: '#fdd59f',
        },
      },
    },
  },
  plugins: [],
}

