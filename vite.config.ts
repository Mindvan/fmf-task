import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/fmf-task/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
