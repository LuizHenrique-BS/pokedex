import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons.svg', 'apple-touch-icon.png', 'icon-512.png'],
      manifest: {
        name: 'PokéDex BFF',
        short_name: 'PokéDex BFF',
        description: 'A modern PokéDex with a BFF backend',
        theme_color: '#aa3bff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            // Cache para imagens do GitHub (sprites da PokeAPI) e outros arquivos de imagem
            // Colocamos primeiro para garantir que imagens não caiam na regra da API
            urlPattern: ({ url }) => 
              url.origin.includes('raw.githubusercontent.com') || 
              url.origin.includes('pokeapi.co') ||
              url.pathname.match(/\.(?:png|jpg|jpeg|svg|gif)$/i),
            handler: 'CacheFirst',
            options: {
              cacheName: 'pokemon-image-cache',
              expiration: {
                maxEntries: 500,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 dias
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            // Cache para a API (JSON) - Captura /api/pokemon ou /pokemon/ desde que NÃO seja imagem
            urlPattern: ({ url }) => 
              (url.pathname.includes('/api/pokemon/')) &&
              !url.pathname.match(/\.(?:png|jpg|jpeg|svg|gif)$/i),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'pokemon-api-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 1 semana
              },
              cacheableResponse: {
                statuses: [200]
              }
            }
          }
        ]
      }
    })
  ],
})
