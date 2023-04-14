import React from 'react';
import { Footer, Header, Sidebar } from './components';
import SecureHead from './secure-head';

const SecureTemplate = props => {
  const { children, title } = props;
  return (
    <div className="wrapper ">
      <SecureHead />
      <Sidebar />
      <div className="main-panel">
        <Header title={title} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default SecureTemplate;
