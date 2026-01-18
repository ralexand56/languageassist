import { TamaguiProvider as OriginalTamaguiProvider } from '@tamagui/core'
import { ReactNode } from 'react'
import config from './tamagui.config'

export * from '@tamagui/core'
export * from 'tamagui'

export function TamaguiProvider({ children }: { children: ReactNode }) {
  return (
    <OriginalTamaguiProvider config={config} defaultTheme="light">
      {children}
    </OriginalTamaguiProvider>
  )
}
