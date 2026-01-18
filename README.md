# LanguageAssist

A monorepo containing a Next.js web app and React Native mobile app with shared UI components using Tamagui and AWS Amplify authentication.

## Project Structure

```
languageassist/
├── apps/
│   ├── web/          # Next.js web application
│   └── mobile/       # React Native (Expo) mobile application
├── packages/
│   ├── ui/           # Shared Tamagui UI components
│   └── auth/         # Shared AWS Amplify authentication
└── package.json      # Monorepo root
```

## Prerequisites

- Node.js 18 or higher
- pnpm 8 or higher (`npm install -g pnpm`)
- AWS account with Amplify configured (for authentication)
- Expo CLI (for mobile development)

## Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure AWS Amplify

Before running the apps, you need to set up AWS Amplify:

1. Create a Cognito User Pool in AWS Console
2. Update `packages/auth/amplify-config.ts` with your AWS credentials:
   - `userPoolId`
   - `userPoolClientId`
   - `identityPoolId`

Alternatively, create a `.env.local` file in the web app:

```bash
# apps/web/.env.local
NEXT_PUBLIC_USER_POOL_ID=your-user-pool-id
NEXT_PUBLIC_USER_POOL_CLIENT_ID=your-client-id
NEXT_PUBLIC_IDENTITY_POOL_ID=your-identity-pool-id
```

### 3. Run the Applications

#### Web App (Next.js)

```bash
pnpm web
# or
cd apps/web
pnpm dev
```

The web app will be available at `http://localhost:3000`

#### Mobile App (React Native/Expo)

```bash
pnpm mobile
# or
cd apps/mobile
pnpm start
```

Then press:
- `i` for iOS simulator
- `a` for Android emulator
- Scan QR code with Expo Go app for physical device

## Available Scripts

- `pnpm web` - Start Next.js web development server
- `pnpm mobile` - Start Expo development server
- `pnpm build:web` - Build Next.js web app for production
- `pnpm build:mobile` - Build mobile app

## Packages

### @languageassist/ui

Shared UI components built with Tamagui that work across web and mobile.

```tsx
import { Button, YStack, Heading } from '@languageassist/ui'
```

### @languageassist/auth

Shared authentication logic using AWS Amplify.

```tsx
import { AuthProvider, useAuth, LoginForm } from '@languageassist/auth'
```

## Tech Stack

- **Monorepo**: pnpm workspaces
- **Web**: Next.js 14 (App Router)
- **Mobile**: React Native (Expo)
- **UI Framework**: Tamagui (cross-platform UI)
- **Authentication**: AWS Amplify (Cognito)
- **Language**: TypeScript

## Development Notes

- Both apps share the same UI components from `packages/ui`
- Authentication logic is shared via `packages/auth`
- Tamagui provides a unified design system across platforms
- The web app uses React Native Web to render Tamagui components

## Next Steps

1. Set up AWS Amplify backend
2. Configure authentication flows
3. Add more shared UI components
4. Implement app-specific features
5. Add navigation/routing
6. Set up CI/CD pipeline

## Troubleshooting

### Module resolution issues

If you encounter module resolution errors, try:

```bash
pnpm install
cd apps/web && pnpm install
cd ../mobile && pnpm install
```

### Tamagui build errors

Make sure you have the correct Tamagui configuration in both apps and the ui package.

### Amplify configuration errors

Verify your AWS credentials are correct in `packages/auth/amplify-config.ts`
