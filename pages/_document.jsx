import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import Header from '../layout/Header';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
