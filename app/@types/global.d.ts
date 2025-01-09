import { type DataRouter } from 'react-router'

declare global {
  interface Window {
    __reactRouterDataRouter: DataRouter
    asyncLoadResource?: (
      language?: string,
      options?: {
        namespaces?: string[] | string
      },
    ) => Promise<void>
  }
}

export {}
