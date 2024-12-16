
/**
 * Sign-in page component
 * @module Authentication
 */

import { signIn } from 'next-auth/react';

/**
 * SignIn page component with GitHub authentication
 */
export default function SignInPage()  {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
        className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
