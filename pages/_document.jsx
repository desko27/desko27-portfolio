import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import './_document.scss';

import Header from '../layout/Header';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="stylesheet" href="/_next/static/style.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
          <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js" />
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
