import { StatusBar } from 'expo-status-bar'
import { TamaguiProvider, YStack, Heading, Button } from '@languageassist/ui'
import { AuthProvider, useAuth, LoginForm } from '@languageassist/auth'

function AppContent() {
  const { user, signOut } = useAuth()

  if (!user) {
    return (
      <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
        <Heading>Welcome to LanguageAssist</Heading>
        <LoginForm />
        <StatusBar style="auto" />
      </YStack>
    )
  }

  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
      <Heading>Welcome, {user.username}!</Heading>
      <Button onPress={signOut}>Sign Out</Button>
      <StatusBar style="auto" />
    </YStack>
  )
}

export default function App() {
  return (
    <TamaguiProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </TamaguiProvider>
  )
}
