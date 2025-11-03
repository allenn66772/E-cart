import React from 'react'

function Pagenotfound() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
  <div className="text-center">
    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
    <p className="text-gray-600 mb-6">
      Sorry, the page you're looking for doesn't exist or has been moved.
    </p>
    <a
      href="/"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
    >
      Go Home
    </a>
  </div>
</div>
    </>
  )
}

export default Pagenotfound