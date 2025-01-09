import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import { preset } from 'vite-config-preset'
import { envOnlyMacros } from 'vite-env-only'
import { i18nAlly } from 'vite-plugin-i18n-ally'
import { publicTypescript } from 'vite-plugin-public-typescript'

export default defineConfig((env) => {
  return preset(
    {
      env,
      ssr: {
        noExternal: ['vite-plugin-i18n-ally', 'vite-config-preset'],
      },
      plugins: [
        i18nAlly(),
        envOnlyMacros(),
        reactRouter(),
        publicTypescript({
          outputDir: 'assets/js',
        }),
      ],
    },
    {
      react: false,
    },
  )
})
