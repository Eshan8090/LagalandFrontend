"use client"
import { useState } from 'react';
import styles from './style.module.css';

export default function Home() {
  return (
    <div className="min-h-screen flex">
          <div className="w-1/2 bg-cover" style={{ backgroundImage: "url('...')" }}>
            <div className="flex items-center justify-center h-full">
              <img src="/path/to/logo.png" alt="Salon-X" className="w-32 h-auto" />
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center p-10">
            <div className="max-w-md w-full space-y-8">
              <div>
                <img src="/path/to/logo.png" alt="Salon-X" className="mx-auto h-12 w-auto" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome back!</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Get your campaign up and running in just minutes.
                </p>
              </div>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address" />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" name="password" type="password" autoComplete="current-password" required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                  </div>
                </div>
               <div>
                 <button type="submit"
                   className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50"
                   style={{ backgroundColor: '#d78b30' }}>
                   Sign in
                 </button>
               </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a>
                  </p>
                </div>
              </form>
              <div className="text-center mt-6">
                <p className="text-xs text-gray-600">
                  By proceeding, you agree to the <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Terms and Conditions</a> and <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
  );
}
