"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setImagePreview(null);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to create account");
        return;
      }

      setSuccess(data.message || "Account created successfully!");
      
      // Auto sign in after successful registration
      setTimeout(async () => {
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (!result?.error) {
          router.push("/");
          router.refresh();
        }
      }, 1000);

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
        <span className='blue_gradient'>Sign Up</span>
      </h1>

      <div className='w-full glassmorphism p-8'>
        {error && (
          <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm'>
            {error}
          </div>
        )}

        {success && (
          <div className='mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm'>
            {success}
          </div>
        )}

        <form onSubmit={handleSignUp} className='flex flex-col gap-4'>
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Name
            </span>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              required
              className='form_input'
            />
          </label>

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
              placeholder='Enter your password (min 6 characters)'
              required
              className='form_input'
            />
          </label>

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Confirm Password
            </span>
            <input
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm your password'
              required
              className='form_input'
            />
          </label>

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Profile Photo{" "}
              <span className='font-normal text-gray-500'>(optional)</span>
            </span>
            <div className='mt-2'>
              {imagePreview ? (
                <div className='relative flex items-center gap-4'>
                  <img
                    src={imagePreview}
                    alt='Profile preview'
                    className='w-20 h-20 rounded-full object-cover'
                  />
                  <button
                    type='button'
                    onClick={removeImage}
                    className='text-red-500 hover:text-red-600 text-sm'
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className='flex items-center justify-center w-full'>
                  <label className='flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'>
                    <div className='flex flex-col items-center justify-center py-2'>
                      <svg
                        className='w-6 h-6 mb-1 text-gray-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                      <p className='text-xs text-gray-500'>
                        Click to upload profile photo
                      </p>
                    </div>
                    <input
                      type='file'
                      accept='image/*'
                      onChange={handleImageChange}
                      className='hidden'
                    />
                  </label>
                </div>
              )}
            </div>
          </label>

          <button
            type='submit'
            disabled={loading}
            className='black_btn mt-4'
          >
            {loading ? "Creating account..." : "Sign Up"}
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
          Sign Up with Google
        </button>

        <p className='mt-6 text-center text-gray-600 text-sm'>
          Already have an account?{" "}
          <Link href='/auth/signin' className='text-blue-600 hover:underline'>
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
