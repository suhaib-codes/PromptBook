"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full mt-16 py-8 border-t border-gray-200 bg-white/30 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-6 sm:px-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          {/* Brand Section */}
          <div className='flex flex-col items-center md:items-start gap-2'>
            <h3 className='font-satoshi font-bold text-xl text-gray-900'>
              PromptBook
            </h3>
            <p className='font-inter text-sm text-gray-600 text-center md:text-left'>
              Organize and share your best AI prompts.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='flex gap-6'>
            <Link
              href='/'
              className='font-inter text-sm text-gray-600 hover:text-gray-900 transition-colors'
            >
              Home
            </Link>
            <Link
              href='/create-prompt'
              className='font-inter text-sm text-gray-600 hover:text-gray-900 transition-colors'
            >
              Create Post
            </Link>
            <Link
              href='/profile'
              className='font-inter text-sm text-gray-600 hover:text-gray-900 transition-colors'
            >
              Profile
            </Link>
          </div>

          {/* Copyright */}
          <div className='text-center md:text-right'>
            <p className='font-inter text-xs text-gray-500'>
              © {currentYear} PromptBook. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
