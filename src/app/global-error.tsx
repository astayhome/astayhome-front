'use client';

import Error from 'next/error';

interface GlobalErrorProps {
  reset: () => void;
}

export default function GlobalError(props: GlobalErrorProps) {
  const { reset } = props;
  return (
    <html lang="en">
      <body className="relative">
        <Error
          statusCode={500}
          title="Server error. Try again or come back later"
        />
        <div className="inset-full absolute flex items-center justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="relative translate-y-full rounded-lg bg-white px-5 py-3 font-medium text-black"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
