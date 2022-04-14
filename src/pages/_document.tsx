import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Titillium+Web:wght@300;400&display=swap" rel="stylesheet" />

        <meta name='application-name' content='Marvel PWA WebApp' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Marvel PWA WebApp' />
        <meta name='description' content='Best Marvel PWA WebApp in the world' />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"></link>
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />
            
        <meta property='og:type' content='Marvel PWA WebApp' />
        <meta property='og:title' content='Marvel PWA WebApp' />
        <meta property='og:description' content='Best Marvel PWA WebApp in the world' />
        <meta property='og:site_name' content='PWA App' />
        <meta property='og:url' content='https://csbmarvelapi.vercel.app/' />
        <meta property='og:image' content='https://csbmarvelapi.vercel.app/icons/android-chrome-maskable-192x192.png' />

        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Marvel Characters WebApp developed by Claudimar Bezerra" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )}
}
