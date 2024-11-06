import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <Link
          to="/"
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-cyan-300 transition-colors"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
