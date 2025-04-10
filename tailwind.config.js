module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', 
    ],
    theme: {
      extend: {
        colors: {
          primary: '#5B21B6',  
          secondary: '#D6BCFA',
          background: '#F3F4F6', 
          button: '#F59E0B', 
          text: '#4B5563', 
          header: '#1F2937', 
          footer: '#111827', 
        },
        fontFamily: {
          sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        },
        fontSize: {
          xs: '0.75rem',   
          s: '0.875rem',  
          m: '1rem',       
          lg: '1.125rem',  
          xl: '1.25rem',   
          '2xl': '1.5rem', 
        },
        spacing: {
          xs: '8px',
          s: '16px',
          m: '24px',
          l: '32px',
          xl: '48px',
          '2xl': '64px',
        },
        boxShadow: {
          DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
          lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.08)',
          xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    plugins: [],
  };
  
  