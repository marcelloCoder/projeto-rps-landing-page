import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const appVersion = process.env.RENDER_GIT_COMMIT || new Date().toISOString()

function appVersionPlugin(): Plugin {
  return {
    name: 'app-version',
    resolveId(id) {
      if (id === 'virtual:app-version') return '\0virtual:app-version'
    },
    load(id) {
      if (id === '\0virtual:app-version') {
        return `export const appVersion = ${JSON.stringify(appVersion)}\n`
      }
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'version.json',
        source: JSON.stringify({ version: appVersion }),
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), appVersionPlugin()],
})
