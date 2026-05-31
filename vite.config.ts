import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tailwindcss(),
    tanstackStart(
      // //
      // {
      //   prerender: {
      //     // Enable static prerendering for static HTML build
      //     enabled: true,
      //     // Generate index.html in subdirectories instead of .html files
      //     autoSubfolderIndex: true,
      //     // Automatically discover all static routes
      //     autoStaticPathsDiscovery: true,
      //     // Extract and follow links from rendered pages
      //     crawlLinks: true,
      //     // Number of concurrent prerender jobs
      //     concurrency: 5,
      //     // Retry failed prerender attempts
      //     retryCount: 2,
      //     retryDelay: 1000,
      //     // Log successful renders
      //     onSuccess: ({ page }) => {
      //       console.log(`✓ Prerendered ${page.path}`)
      //     },
      //   },
      // }
    ),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})

export default config