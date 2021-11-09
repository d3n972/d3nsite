const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    //mode: 'jit',
    purge: [
        './*.*',
    ],
    darkMode:'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
                mono: [...defaultTheme.fontFamily.mono]
            },
        },
    },

    plugins: [require('@tailwindcss/typography')],
};
