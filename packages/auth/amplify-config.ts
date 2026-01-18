import { ResourcesConfig } from 'aws-amplify'

// TODO: Replace these values with your actual AWS Amplify configuration
// You can get these values from the AWS Amplify Console after setting up your backend
export const amplifyConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID || 'your-user-pool-id',
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || 'your-user-pool-client-id',
      identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID || 'your-identity-pool-id',
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: 'code',
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: false,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
}
