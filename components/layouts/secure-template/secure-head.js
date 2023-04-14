import React from 'react';
import Head from 'next/head';

const SecureHead = () => {
  return (
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
      />
      <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
      />
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <link
        href="/assets/css/material-dashboard.css"
        rel="stylesheet"
      />
    </Head>
  );
};

export default SecureHead;
