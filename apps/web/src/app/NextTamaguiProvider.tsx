'use client'

import '@tamagui/core/reset.css'
import { TamaguiProvider } from '@languageassist/ui'
import { ReactNode } from 'react'

export function NextTamaguiProvider({ children }: { children: ReactNode }) {
  return (
    <TamaguiProvider>
      {children}
    </TamaguiProvider>
  )
}
