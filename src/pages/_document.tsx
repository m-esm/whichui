import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Which UI Framework Should You Use For React?</title>
        <meta
          name="description"
          content="Compare different UI frameworks to find the best one for your project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Which UI Framework Should You Use?"
        />
        <meta
          property="og:description"
          content="Compare different UI frameworks to find the best one for your project."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://whichui.com/favicon.svg" />
        <meta property="og:url" content="https://whichui.com" />
        <meta
          name="twitter:card"
          content="https://whichui.com/screenshot.png"
        />
        <meta
          name="twitter:title"
          content="Which UI Framework Should You Use?"
        />
        <meta
          name="twitter:description"
          content="Compare different UI frameworks to find the best one for your project."
        />
        <meta
          name="twitter:image"
          content="https://whichui.com/screenshot.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
