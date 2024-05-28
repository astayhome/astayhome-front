/* eslint-disable @next/next/no-page-custom-font */
// 'use client';

// import Error from 'next/error';

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.
import cs from '@/styles/not-found.module.scss';

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow, noimageindex" />
      </head>
      <body className={cs.body}>
        <main className={`${cs.main} h-screen`}>
          <div
            className={`${cs.content} flex h-full flex-col items-center justify-center`}
          >
            <svg viewBox="0 0 400 300">
              <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="50%">
                  404
                </text>
              </symbol>

              <g className="g-ants">
                <use xlinkHref="#s-text" className={cs.text} />
                <use xlinkHref="#s-text" className={cs.text} />
                <use xlinkHref="#s-text" className={cs.text} />
                <use xlinkHref="#s-text" className={cs.text} />
                <use xlinkHref="#s-text" className={cs.text} />
              </g>
            </svg>

            <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-nowrap text-3xl sm:text-5xl">
                Page Not Found
              </h1>
              <a href="/" className=" text-lg sm:text-2xl">
                Back to Home
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
