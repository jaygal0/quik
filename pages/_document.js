import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Sahar turns 30" />
        <link
          rel="preload"
          href="/fonts/hoefler-text-black-italic.ttf"
          as="font"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="/fonts/hoefler-text-black.ttf"
          as="font"
          crossOrigin="true"
        />{' '}
        <link
          rel="preload"
          href="/fonts/hoefler-text-italic.ttf"
          as="font"
          crossOrigin="true"
        />{' '}
        <link
          rel="preload"
          href="/fonts/hoefler-text.ttf"
          as="font"
          crossOrigin="true"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
