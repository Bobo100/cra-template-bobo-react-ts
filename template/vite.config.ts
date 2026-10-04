import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 部署到 GitHub Pages 的 project page 時改成 '/<repo 名稱>/'
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: { port: 3000 },
})
