import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        green: colors.emerald,
        red: colors.rose,
        default: '#121e46',
      },
    },
  },
  plugins: [],
} satisfies Config
