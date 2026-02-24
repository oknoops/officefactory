'use client';

import Error from 'next/error';

// This page renders when a route like `/unknown` is requested.
// It must match the signature of a Next.js Client Component.
export default function NotFound() {
    return (
        <html lang="en">
            <body>
                <Error statusCode={404} />
            </body>
        </html>
    );
}
