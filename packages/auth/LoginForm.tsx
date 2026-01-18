import { useState } from 'react'
import { YStack, Input, Button, Text } from '@languageassist/ui'
import { useAuth } from './index'

export function LoginForm() {
  const { signIn, signUp } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit() {
    setError('')
    try {
      if (isSignUp) {
        await signUp(username, password, email)
        alert('Sign up successful! Please check your email for verification code.')
      } else {
        await signIn(username, password)
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    }
  }

  return (
    <YStack gap="$3" width={300}>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      {isSignUp && (
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      )}
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text color="$red10">{error}</Text> : null}
      <Button onPress={handleSubmit}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </Button>
      <Button
        variant="outlined"
        onPress={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </Button>
    </YStack>
  )
}
