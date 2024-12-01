'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  // Check if the error is a 404 error or any other condition that signifies "Not Found"
  const isNotFound =
    error?.status === 404 || error?.message?.includes('Not Found');

  return (
    <div>
      {isNotFound ? (
        <>
          <h2>Page Not Found</h2>
          <p>The page you're looking for might not exist or has been moved.</p>
          <button onClick={() => reset()}>Go back to Home</button>
        </>
      ) : (
        <>
          <h2>Something went wrong!</h2>
          <h2>{error?.message}</h2>
          <button onClick={() => reset()}>Try again</button>
        </>
      )}
    </div>
  );
}
