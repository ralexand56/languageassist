/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'react-native-reanimated',
    '@tamagui/core',
    '@tamagui/config',
    '@tamagui/animations-reanimated',
    'tamagui',
    '@languageassist/ui'
  ]
}

module.exports = withTamagui(nextConfig, {
  config: '../../packages/ui/tamagui.config.ts',
  components: ['tamagui'],
  outputCSS: './public/tamagui.css'
})
