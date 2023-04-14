import React from 'react';
import Head from 'next/head';
import { Footer, Header } from './components';
import MarketingHead from './marketing-head';

const MarketingTemplate = props => {
  const { children } = props;
  return (
    <div id="page">
      <MarketingHead />
      <Head>
        <link href="styles/bootstrap.css" rel="stylesheet" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingTemplate;
