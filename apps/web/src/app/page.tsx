'use client'

import { Button, Heading, YStack } from '@languageassist/ui'
import { AuthProvider, useAuth, LoginForm } from '@languageassist/auth'

function HomeContent() {
  const { user, signOut } = useAuth()

  if (!user) {
    return (
      <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
        <Heading>Welcome to LanguageAssist</Heading>
        <LoginForm />
      </YStack>
    )
  }

  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
      <Heading>Welcome, {user.username}!</Heading>
      <Button onPress={signOut}>Sign Out</Button>
    </YStack>
  )
}

export default function Home() {
  return (
    <AuthProvider>
      <HomeContent />
    </AuthProvider>
  )
}
