import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" class="scroll-smooth">
      <Head />
      <body class="h-screen ">
        <div id='modal'></div>
        <Main />
        <NextScript />
      </body >
    </Html>
  )
}
