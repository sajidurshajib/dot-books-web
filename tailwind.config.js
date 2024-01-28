/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-yellow': '#fef08a',
                'primary-dark': '#4b5563',
                'secondary-yellow': '#fffc91',
                'back-light': '#f8f9fa',
            },
        },
    },
    plugins: [],
}
