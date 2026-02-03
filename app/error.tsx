"use client";

import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
        <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-red-100 text-red-600 text-2xl font-bold">
          !
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Something went wrong
        </h2>

        <p className="text-sm text-gray-600 mb-6 break-words">
          {error.message}
        </p>

        <button
          onClick={reset}
          className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold shadow-sm hover:bg-gray-800 hover:shadow-md active:scale-[0.98] transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default Error;
