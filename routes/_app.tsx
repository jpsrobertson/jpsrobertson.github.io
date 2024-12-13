import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="en" class="h-full bg-gray-50">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Josh Robertson - Data, Consulting & Product Expert</title>
        <meta name="description" content="Personal website of Josh Robertson - Expert in Data, Consulting, Product, and Economics" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body class="h-full">
        <Component />
      </body>
    </html>
  );
} 