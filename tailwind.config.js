const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    //mode: 'jit',
    purge: [
        './src/*.svelte',
        './src/components/*.svelte',
        './src/pages/*.svelte'
    ],
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
