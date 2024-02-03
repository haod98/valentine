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
        'scale-[110%]',
        'scale-[120%]',
        'scale-[130%]',
        'scale-[140%]',
        'scale-[150%]',
        'scale-[160%]',
        'scale-[170%]',
        'scale-[180%]',
        'scale-[190%]',
        'scale-[200%]',
        'text-[1rem]',
        'text-[1.5rem]',
        'text-[2rem]',
        'text-[2.5rem]',
        'text-[3rem]',
        'text-[3.5rem]',
        'text-[4rem]',
        'text-[4.5rem]',
        'text-[5rem]',
        'text-[5.5rem]',
        'text-[6rem]',
    ]

}

