import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="fh5co-nav" role="navigation">
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-right">
              <p className="site">www.ijcis.com</p>
              <p className="num">Call:0324-8827216</p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-menu">
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <Link href="/" as="/">
                <div id="fh5co-logo">
                  <a href="index.html">
                    <img
                      src="http://blogs.edf.org/energyexchange/files/2017/08/book-clipart.png"
                      style={{ height: '50px' }}
                    />
                    IJCIS<span>.</span>
                  </a>
                </div>
              </Link>
            </div>
            <div className="col-xs-10 text-right menu-1">
              <ul>
                <Link href="/" as="/">
                  <li>
                    <a href="#">Home</a>
                  </li>
                </Link>
                <Link href="/journals" as="/journals">
                  <li>
                    <a href="#">Journals</a>
                  </li>
                </Link>
                <Link href="/about" as="/about">
                  <li>
                    <a href="#">About</a>
                  </li>
                </Link>
                <Link href="/pricing" as="/pricing">
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </Link>
                <li className="has-dropdown">
                  <ul className="dropdown">
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">eCommerce</a>
                    </li>
                    <li>
                      <a href="#">Branding</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                  </ul>
                </li>
                <Link href="/contact" as="/contact">
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </Link>
                <Link href="/login" as="/login">
                  <li className="btn-cta">
                    <a href="#">
                      <span>Login</span>
                    </a>
                  </li>
                </Link>
                <Link href="/create-account" as="/create-account">
                  <li className="btn-cta">
                    <a href="#">
                      <span>Sign Up</span>
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Header };
