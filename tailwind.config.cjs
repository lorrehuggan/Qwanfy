/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				loading: {
					'0%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				loading: 'loading 0.5s ease-in-out infinite'
			},
			boxShadow: {
				main: `0px 0.9px 2.2px rgba(0, 0, 0, 0.02),
  0px 2.2px 5.3px rgba(0, 0, 0, 0.028),
  0px 4.1px 10px rgba(0, 0, 0, 0.035),
  0px 7.4px 17.9px rgba(0, 0, 0, 0.042),
  0px 13.8px 33.4px rgba(0, 0, 0, 0.05),
  0px 33px 80px rgba(0, 0, 0, 0.07)`
			},
			colors: {
				'c-teal': {
					50: '#f6fcfe',
					100: '#edfafe',
					200: '#d2f2fb',
					300: '#b7e9f9',
					400: '#82d9f5',
					500: '#4cc9f0',
					600: '#44b5d8',
					700: '#3997b4',
					800: '#2e7990',
					900: '#256276'
				},
				'c-blue': {
					50: '#f6f7fe',
					100: '#eceffd',
					200: '#d0d8fb',
					300: '#b4c0f8',
					400: '#7b90f3',
					500: '#4361ee',
					600: '#3c57d6',
					700: '#3249b3',
					800: '#283a8f',
					900: '#213075'
				},
				'c-indigo': {
					50: '#f5f3fa',
					100: '#ebe7f6',
					200: '#cec2e8',
					300: '#b09eda',
					400: '#7555bf',
					500: '#3a0ca3',
					600: '#340b93',
					700: '#2c097a',
					800: '#230762',
					900: '#1c0650'
				},
				'c-purple': {
					50: '#f8f3fb',
					100: '#f1e6f8',
					200: '#dcc2ed',
					300: '#c79de2',
					400: '#9c53cd',
					500: '#7209b7',
					600: '#6708a5',
					700: '#560789',
					800: '#44056e',
					900: '#38045a'
				},
				'c-pink': {
					50: '#fff4f9',
					100: '#fee9f3',
					200: '#fdc9e1',
					300: '#fca8ce',
					400: '#f966aa',
					500: '#f72585',
					600: '#de2178',
					700: '#b91c64',
					800: '#941650',
					900: '#791241'
				}
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#f72585',

					secondary: '#7209b7',

					accent: '#4cc9f0',

					neutral: '#171717',

					'base-100': '#FFFFFF',

					info: '#3ABFF8',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#F87272'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
