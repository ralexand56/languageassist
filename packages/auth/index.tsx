import { Amplify } from 'aws-amplify'
import { getCurrentUser, signIn, signOut, signUp, confirmSignUp, fetchAuthSession } from 'aws-amplify/auth'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { amplifyConfig } from './amplify-config'

// Configure Amplify
Amplify.configure(amplifyConfig)

export interface AuthUser {
  username: string
  userId: string
  signInDetails?: any
}

interface AuthContextType {
  user: AuthUser | null
  loading: boolean
  signIn: (username: string, password: string) => Promise<void>
  signUp: (username: string, password: string, email: string) => Promise<void>
  confirmSignUp: (username: string, code: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    try {
      const currentUser = await getCurrentUser()
      setUser({
        username: currentUser.username,
        userId: currentUser.userId,
        signInDetails: currentUser.signInDetails,
      })
    } catch (error) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  async function handleSignIn(username: string, password: string) {
    try {
      await signIn({ username, password })
      await checkUser()
    } catch (error) {
      console.error('Error signing in:', error)
      throw error
    }
  }

  async function handleSignUp(username: string, password: string, email: string) {
    try {
      await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      })
    } catch (error) {
      console.error('Error signing up:', error)
      throw error
    }
  }

  async function handleConfirmSignUp(username: string, code: string) {
    try {
      await confirmSignUp({ username, confirmationCode: code })
    } catch (error) {
      console.error('Error confirming sign up:', error)
      throw error
    }
  }

  async function handleSignOut() {
    try {
      await signOut()
      setUser(null)
    } catch (error) {
      console.error('Error signing out:', error)
      throw error
    }
  }

  const value = {
    user,
    loading,
    signIn: handleSignIn,
    signUp: handleSignUp,
    confirmSignUp: handleConfirmSignUp,
    signOut: handleSignOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { signIn, signOut, signUp, confirmSignUp, getCurrentUser, fetchAuthSession }
