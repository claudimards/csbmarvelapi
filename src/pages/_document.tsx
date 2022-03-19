import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Marvel Hereos web app developed by Claudimar Bezerra" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )}
}
