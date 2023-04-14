// @flow
import React from 'react';
import MarketingTemplate from '@/layout/marketing-template';
import { Banner } from '../common';
import { Slider } from '../common/slider';

const Pricing = () => {
  return (
    <div>
      {/* 	<div class="fh5co-loader"></div> */}

      <div id="page">
        <MarketingTemplate>
          <Slider />
          <div id="fh5co-pricing" className="fh5co-bg-section">
            <div className="container">
              <div className="row animate-box">
                {/* eslint-disable-next-line max-len */}
                <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                  <h2>Plan &amp; Pricing</h2>
                  <p>
                    Dignissimos asperiores vitae velit veniam totam fuga
                    molestias accusamus alias autem provident. Odit ab aliquam
                    dolor eius.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="pricing pricing--rabten">
                  <div className="col-md-4 animate-box">
                    <div className="pricing__item">
                      <div className="wrap-price">
                        {/* <!-- <div class="icon icon-user2"></div> --> */}
                        <h3 className="pricing__title">Trial</h3>
                        {/* eslint-disable-next-line max-len */}
                        {/* <!-- <p class="pricing__sentence">Single user license</p> --> */}
                      </div>
                      <div className="pricing__price">
                        <span className="pricing__anim pricing__anim--1">
                          <span className="pricing__currency">$</span>0
                        </span>
                        <span className="pricing__anim pricing__anim--2">
                          <span className="pricing__period">per year</span>
                        </span>
                      </div>
                      <div className="wrap-price">
                        <ul className="pricing__feature-list">
                          <li className="pricing__feature">One Day Trial</li>
                          <li className="pricing__feature">Limited Courses</li>
                          <li className="pricing__feature">Free 3 Lessons</li>
                          <li className="pricing__feature">No Supporter</li>
                          <li className="pricing__feature">No Tutorial</li>
                          <li className="pricing__feature">No Ebook</li>
                          <li className="pricing__feature">
                            Limited Registered User
                          </li>
                        </ul>
                        <button className="pricing__action">Choose plan</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box">
                    <div className="pricing__item">
                      <div className="wrap-price">
                        {/* <!-- <div class="icon icon-store"></div> --> */}
                        <h3 className="pricing__title">Silver</h3>
                        {/* eslint-disable-next-line max-len */}
                        {/* <!-- <p class="pricing__sentence">Up to 5 users</p> --> */}
                      </div>
                      <div className="pricing__price">
                        <span className="pricing__anim pricing__anim--1">
                          <span className="pricing__currency">$</span>79
                        </span>
                        <span className="pricing__anim pricing__anim--2">
                          <span className="pricing__period">per year</span>
                        </span>
                      </div>
                      <div className="wrap-price">
                        <ul className="pricing__feature-list">
                          <li className="pricing__feature">
                            One Year Standard Access
                          </li>
                          <li className="pricing__feature">Limited Courses</li>
                          <li className="pricing__feature">300+ Lessons</li>
                          <li className="pricing__feature">Random Supporter</li>
                          <li className="pricing__feature">View Only Ebook</li>
                          <li className="pricing__feature">
                            Standard Tutorials
                          </li>
                          <li className="pricing__feature">
                            Unlimited Registered User
                          </li>
                        </ul>
                        <button className="pricing__action">Choose plan</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box">
                    <div className="pricing__item">
                      <div className="wrap-price">
                        {/* <!-- <div class="icon icon-home2"></div> --> */}
                        <h3 className="pricing__title">Gold</h3>
                        {/* eslint-disable-next-line max-len */}
                        {/* <!-- <p class="pricing__sentence">Unlimited users</p> --> */}
                      </div>
                      <div className="pricing__price">
                        <span className="pricing__anim pricing__anim--1">
                          <span className="pricing__currency">$</span>499
                        </span>
                        <span className="pricing__anim pricing__anim--2">
                          <span className="pricing__period">per year</span>
                        </span>
                      </div>
                      <div className="wrap-price">
                        <ul className="pricing__feature-list">
                          <li className="pricing__feature">Life Time Access</li>
                          <li className="pricing__feature">
                            Unlimited All Courses
                          </li>
                          <li className="pricing__feature">
                            7000+ Lessons &amp; Growing
                          </li>
                          <li className="pricing__feature">Free Supporter</li>
                          <li className="pricing__feature">
                            Free Ebook Downloads
                          </li>
                          <li className="pricing__feature">
                            Premium Tutorials
                          </li>
                          <li className="pricing__feature">
                            Unlimited Registered User
                          </li>
                        </ul>
                        <button className="pricing__action">Choose plan</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Banner />
        </MarketingTemplate>
      </div>

      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className="icon-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};
export default Pricing;
