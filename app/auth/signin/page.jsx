"use client";

import { useState } from "react";
import { signIn, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const SignIn = () => {
  const router = useRouter();
  const [providers, setProviders] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const handleCredentialsSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <section className='w-full max-w-md mx-auto flex flex-col items-center'>
      <h1 className='head_text text-center mb-6'>
        <span className='blue_gradient'>Log In</span>
      </h1>

      <div className='w-full glassmorphism p-8'>
        {error && (
          <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm'>
            {error}
          </div>
        )}

        <form onSubmit={handleCredentialsSignIn} className='flex flex-col gap-4'>
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Email
            </span>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              required
              className='form_input'
            />
          </label>

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Password
            </span>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              required
              className='form_input'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='black_btn mt-4'
          >
            {loading ? "Logging in..." : "Log In with Email"}
          </button>
        </form>

        <div className='flex items-center my-6'>
          <div className='flex-1 border-t border-gray-300'></div>
          <span className='px-4 text-gray-500 text-sm'>or</span>
          <div className='flex-1 border-t border-gray-300'></div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className='outline_btn w-full flex items-center justify-center gap-3'
        >
          <Image
            src='/assets/images/google-icon.svg'
            alt='Google'
            width={20}
            height={20}
          />
          Log In with Google
        </button>

        <p className='mt-6 text-center text-gray-600 text-sm'>
          Don't have an account?{" "}
          <Link href='/auth/signup' className='text-blue-600 hover:underline'>
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
