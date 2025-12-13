"use client";

import { useState } from "react";

const AIImprove = () => {
  const [originalPrompt, setOriginalPrompt] = useState("");
  const [improvedPrompt, setImprovedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const MAX_CHARS = 3000;

  const handleImprove = async () => {
    // Clear previous state
    setError("");
    setImprovedPrompt("");

    // Validate input
    if (!originalPrompt.trim()) {
      setError("Please enter a prompt to improve");
      return;
    }

    if (originalPrompt.length > MAX_CHARS) {
      setError(`Prompt exceeds maximum length of ${MAX_CHARS} characters`);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-improve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: originalPrompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to improve prompt");
      }

      setImprovedPrompt(data.improvedPrompt);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseImproved = () => {
    setOriginalPrompt(improvedPrompt);
    setImprovedPrompt("");
    setError("");
  };

  const handleClear = () => {
    setOriginalPrompt("");
    setImprovedPrompt("");
    setError("");
  };

  const handleClearOutput = () => {
    setImprovedPrompt("");
    setError("");
  };

  return (
    <section className='w-full max-w-3xl flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>AI Prompt Auto-Improver</span>
      </h1>
      <p className='desc text-left max-w-2xl'>
        Improve your AI prompts with intelligent suggestions while preserving
        your original intent.
      </p>

      <div className='mt-10 w-full flex flex-col gap-7 glassmorphism'>
        {/* Input Section */}
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Original Prompt
          </span>
          <span className='text-gray-400 text-sm ml-2'>
            ({originalPrompt.length}/{MAX_CHARS})
          </span>
          <textarea
            value={originalPrompt}
            onChange={(e) => setOriginalPrompt(e.target.value)}
            placeholder='Write a prompt for generating a realistic AI image of a sunset over mountains with vibrant colors...'
            className='form_textarea'
            disabled={isLoading}
            maxLength={MAX_CHARS}
          />
        </label>

        {/* Error Message */}
        {error && (
          <div className='bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm'>
            {error}
          </div>
        )}

        {/* Action Buttons */}
        <div className='flex gap-3 flex-wrap'>
          <button
            type='button'
            onClick={handleImprove}
            disabled={isLoading || !originalPrompt.trim()}
            className='black_btn disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? (
              <span className='flex items-center gap-2'>
                <svg
                  className='animate-spin h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                Improving...
              </span>
            ) : (
              "✨ Improve with AI"
            )}
          </button>

          <button
            type='button'
            onClick={handleClear}
            disabled={isLoading}
            className='outline_btn disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Clear All
          </button>
        </div>

        {/* Output Section */}
        {improvedPrompt && (
          <div className='mt-4 border-t border-gray-200 pt-6'>
            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>
                AI-Improved Prompt
              </span>
              <div className='mt-2 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-100'>
                <p className='text-gray-700 whitespace-pre-wrap leading-relaxed'>
                  {improvedPrompt}
                </p>
              </div>
            </label>

            {/* Output Action Buttons */}
            <div className='flex gap-3 mt-4 flex-wrap'>
              <button
                type='button'
                onClick={handleUseImproved}
                className='black_btn'
              >
                ✅ Use Improved Prompt
              </button>
              <button
                type='button'
                onClick={handleClearOutput}
                className='outline_btn'
              >
                ❌ Clear
              </button>
              <button
                type='button'
                onClick={() => {
                  navigator.clipboard.writeText(improvedPrompt);
                }}
                className='outline_btn'
              >
                📋 Copy
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tips Section */}
      <div className='mt-8 w-full glassmorphism'>
        <h3 className='font-satoshi font-semibold text-base text-gray-700 mb-3'>
          💡 Tips for better prompts
        </h3>
        <ul className='text-sm text-gray-600 space-y-2'>
          <li>• Be specific about what you want the AI to generate</li>
          <li>• Include details about style, tone, or format</li>
          <li>• Mention any constraints or requirements</li>
          <li>• Use the improved prompt as a starting point, then customize further</li>
        </ul>
      </div>
    </section>
  );
};

export default AIImprove;
