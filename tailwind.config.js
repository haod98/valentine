/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'secondary': ['new-zen', 'ui-sans-serif', 'system-ui']
            }
        },
        fontFamily: {
            'sans': ['p22-underground', 'ui-sans-serif', 'system-ui'],
        }
    },
    plugins: [],
    safelist: [
        'text-[1rem]',
        'text-[1.5rem]',
        'text-[2rem]',
    ]

}

