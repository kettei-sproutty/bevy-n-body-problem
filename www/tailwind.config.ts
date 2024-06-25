import type { Config } from 'tailwindcss'
import catpuccin from '@catppuccin/tailwindcss';

export default {
  content: ["src/**/*.{svelte,ts,html}"],
  plugins: [catpuccin({ defaultFlavour: 'macchiato' })]
} satisfies Config
