/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-yellow': '#fef08a',
                'secondary-yellow': '#fffc91',
                'primary-dark': '#4b5563',
            },
        },
    },
    plugins: [],
}
