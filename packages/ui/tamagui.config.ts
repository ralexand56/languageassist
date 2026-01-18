import { config } from '@tamagui/config/v3'
import { createTamagui } from '@tamagui/core'
import { createAnimations } from '@tamagui/animations-reanimated'

const tamaguiConfig = createTamagui({
  ...config,
  animations: createAnimations({
    bouncy: {
      type: 'spring',
      damping: 10,
      mass: 0.9,
      stiffness: 100,
    },
    lazy: {
      type: 'spring',
      damping: 20,
      stiffness: 60,
    },
    quick: {
      type: 'spring',
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
  }),
})

export type Conf = typeof tamaguiConfig

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig
