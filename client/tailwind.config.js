/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      container: {
        center: false,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1177px',
        },
      },
      colors: {
        'my-pink': '#d596b5',
        'my-purple': '#a76994',
        'my-gray': '#E7E6EF',
        'my-lightpink': '#f6eeed',
        'my-subText': '#fcaf93',
        'sectionTitle': '#445279',
        'productColor': '#F6F7FB',
        'textBlue': '#afc3f2',
        'productHover': '#2F1AC4',
        'my-orange': '#f0b8ac',
        'my-purple2': '#BB7F9B',
        'my-Blue': '#19283d',
        'my-orange1': '#F5C2B1',

         // צבעים למצב לילה
         'dark-background': '#170c29',
         'dark-background2': '#281549',
         'dark-my-pink': '#9ff7fe',
         'dark-my-subText': '#0f3460',
         'dark-accent': '#e94560',
         'dark-text': '#ffffff',
         'dark-background3': '#361e5f',

      },
      
    },
  },
  darkMode: 'class', // הוספת תמיכה במצב לילה
  plugins: [],
};
