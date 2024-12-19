"use client"

import Button from '@/components/ui/Button';
import { signIn } from 'next-auth/react';
import * as React from 'react';
import toast from 'react-hot-toast';

export interface IAppProps {
}

export function App (props: IAppProps) {

    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function loginWithGoogle() {
        setIsLoading(true)
        try {
          await signIn('google')
        } catch (error) {
          // display error message to user
          toast.error('Something went wrong.')
        } finally {
          setIsLoading(false)
        }
      }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
    <div className='w-full max-w-md space-y-8 bg-white p-6 rounded-lg shadow-md'>
      <div className='flex flex-col items-center'>
        {/* Logo can be added here */}
        <h2 className='mt-6 text-center text-2xl font-semibold text-gray-800'>
          Sign in to your account
        </h2>
      </div>
  
      <Button
        isLoading={isLoading}
        type='button'
        className='w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md py-2'>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <span>Sign in with Google</span>
        )}
      </Button>
    </div>
  </div>
  );
}
