import React from 'react';
import Head from 'next/head';

const MarketingHead = () => {
  return (
    <Head>
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin
      ></script>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
      />
    </Head>
  );
};

export default MarketingHead;
