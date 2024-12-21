// _document.js (Next.js)
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add Google Fonts link */}

          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand&family=Baloo+2&family=Fredoka+One&family=Bangers&family=Lobster&family=Amatic+SC&family=Piedra&family=Rock+Salt&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
