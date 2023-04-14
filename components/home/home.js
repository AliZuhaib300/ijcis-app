import React from 'react';
/* import { Navbar } from './components';
import Link from 'next/link'; */
import { Banner } from '../common';
import MarketingTemplate from '../layouts/marketing-template';
import { Slider } from '../common/slider';

export default function Home() {
  return (
    <div>
      <MarketingTemplate>
        <Slider />

        <div id="fh5co-course-categories">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                <h2>Journal categories</h2>
                <p>
                  Dignissimos asperiores vitae velit veniam totam fuga molestias
                  accusamus alias autem provident. Odit ab aliquam dolor eius.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services">
                  <span className="icon">
                    <i className="icon-shop"></i>
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="#">Business</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services">
                  <span className="icon">
                    <i className="icon-heart4"></i>
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="#">Health &amp; Psychology</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services">
                  <span className="icon">
                    <i className="icon-banknote"></i>
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="#">Accounting</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services">
                  <span className="icon">
                    <i className="icon-lab2"></i>
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="#">Science &amp; Technology</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services">
                  <span className="icon">
                    <i className="icon-photo"></i>
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="#">Art &amp; Media</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services">
                  <span className="icon">
                    <i className="icon-home-outline"></i>
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="#">Real Estate</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services">
                  <span className="icon">
                    <i className="icon-bubble3"></i>
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="#">Language</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services">
                  <span className="icon">
                    <i className="icon-world"></i>
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="#">Web &amp; Programming</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="fh5co-counter"
          className="fh5co-counters"
          style={{ backgroundImage: 'url(images/img_bg_4.jpg);' }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="row">
                  <div className="col-md-3 col-sm-6 text-center animate-box">
                    <span className="icon">
                      <i className="icon-world"></i>
                    </span>
                    <span
                      className="fh5co-counter js-counter"
                      data-from="0"
                      data-to="3297"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span className="fh5co-counter-label">
                      Foreign Followers
                    </span>
                  </div>
                  <div className="col-md-3 col-sm-6 text-center animate-box">
                    <span className="icon">
                      <i className="icon-study"></i>
                    </span>
                    <span
                      className="fh5co-counter js-counter"
                      data-from="0"
                      data-to="3700"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span className="fh5co-counter-label">
                      Students Enrolled
                    </span>
                  </div>
                  <div className="col-md-3 col-sm-6 text-center animate-box">
                    <span className="icon">
                      <i className="icon-bulb"></i>
                    </span>
                    <span
                      className="fh5co-counter js-counter"
                      data-from="0"
                      data-to="5034"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span className="fh5co-counter-label">
                      Classes Complete
                    </span>
                  </div>
                  <div className="col-md-3 col-sm-6 text-center animate-box">
                    <span className="icon">
                      <i className="icon-head"></i>
                    </span>
                    <span
                      className="fh5co-counter js-counter"
                      data-from="0"
                      data-to="1080"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span className="fh5co-counter-label">
                      Certified Teachers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-course">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                <h2>Our Course</h2>
                <p>
                  Dignissimos asperiores vitae velit veniam totam fuga molestias
                  accusamus alias autem provident. Odit ab aliquam dolor eius.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 animate-box">
                <div className="course">
                  <a
                    href="#"
                    className="course-img"
                    style={{ backgroundImage: 'url(images/project-1.jpg);' }}
                  >
                    >
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="#">Web Master</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius molestias accusamus alias autem provident. Odit
                      ab aliquam dolor eius.
                    </p>
                    <span>
                      <a href="#" className="btn btn-primary btn-sm btn-course">
                        Take A Course
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="course">
                  <a
                    href="#"
                    className="course-img"
                    style={{ backgroundImage: 'url(images/project-2.jpg)' }}
                  >
                    >
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="#">Business &amp; Accounting</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius molestias accusamus alias autem provident. Odit
                      ab aliquam dolor eius.
                    </p>
                    <span>
                      <a href="#" className="btn btn-primary btn-sm btn-course">
                        Take A Course
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="course">
                  <a
                    href="#"
                    className="course-img"
                    style={{ backgroundImage: 'url(images/project-3.jpg)' }}
                  >
                    >
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="#">Science &amp; Technology</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius molestias accusamus alias autem provident. Odit
                      ab aliquam dolor eius.
                    </p>
                    <span>
                      <a href="#" className="btn btn-primary btn-sm btn-course">
                        Take A Course
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="course">
                  <a
                    href="#"
                    className="course-img"
                    style={{ backgroundImage: 'url(images/project-4.jpg)' }}
                  >
                    >
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="#">Health &amp; Psychology</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius molestias accusamus alias autem provident. Odit
                      ab aliquam dolor eius.
                    </p>
                    <span>
                      <a href="#" className="btn btn-primary btn-sm btn-course">
                        Take A Course
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="fh5co-testimonial"
          style={{ backgroundImage: 'url(images/school.jpg)' }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                <h2>
                  <span>Testimonials</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="row animate-box">
                  <div className="owl-carousel owl-carousel-fullwidth">
                    <div className="item">
                      <div className="testimony-slide active text-center">
                        <div
                          className="user"
                          style={{ backgroundImage: 'url(images/person1.jpg)' }}
                        ></div>
                        <span>
                          Mary Walker
                          <br />
                          <small>Students</small>
                        </span>
                        <blockquote>
                          <p>
                            &ldquo;Far far away, behind the word mountains, far
                            from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean.&rdquo;
                          </p>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-slide active text-center">
                        <div
                          className="user"
                          style={{ backgroundImage: 'url(images/person2.jpg)' }}
                        ></div>
                        <span>
                          Mike Smith
                          <br />
                          <small>Students</small>
                        </span>
                        <blockquote>
                          <p>
                            &ldquo;Separated they live in Bookmarksgrove right
                            at the coast of the Semantics, a large language
                            ocean.&rdquo;
                          </p>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-slide active text-center">
                        <div
                          className="user"
                          style={{ backgroundImage: 'url(images/person3.jpg)' }}
                        ></div>
                        <span>
                          Rita Jones
                          <br />
                          <small>Teacher</small>
                        </span>
                        <blockquote>
                          <p>
                            &ldquo;Far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated
                            they live in Bookmarksgrove right at the coast of
                            the Semantics, a large language ocean.&rdquo;
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-blog">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Blog &amp; Events</h2>
                <p>
                  Dignissimos asperiores vitae velit veniam totam fuga molestias
                  accusamus alias autem provident. Odit ab aliquam dolor eius.
                </p>
              </div>
            </div>
            <div className="row row-padded-mb">
              <div className="col-md-4 animate-box">
                <div className="fh5co-event">
                  <div className="date text-center">
                    <span>
                      15
                      <br />
                      Mar.
                    </span>
                  </div>
                  <h3>
                    <a href="#">USA, International Triathlon Event</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="fh5co-event">
                  <div className="date text-center">
                    <span>
                      15
                      <br />
                      Mar.
                    </span>
                  </div>
                  <h3>
                    <a href="#">USA, International Triathlon Event</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="fh5co-event">
                  <div className="date text-center">
                    <span>
                      15
                      <br />
                      Mar.
                    </span>
                  </div>
                  <h3>
                    <a href="#">New Device Develope by Microsoft</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="fh5co-blog animate-box">
                  <a
                    href="#"
                    className="blog-img-holder"
                    style={{ backgroundImage: 'url(images/project-1.jpg)' }}
                  ></a>
                  <div className="blog-text">
                    <h3>
                      <a href="#">Healty Lifestyle &amp; Living</a>
                    </h3>
                    <span className="posted_on">March. 15th</span>
                    <span className="comment">
                      <a href="">
                        21<i className="icon-speech-bubble"></i>
                      </a>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="fh5co-blog animate-box">
                  <a
                    href="#"
                    className="blog-img-holder"
                    style={{ backgroundImage: 'url(images/project-2.jpg)' }}
                  ></a>
                  <div className="blog-text">
                    <h3>
                      <a href="#">Healty Lifestyle &amp; Living</a>
                    </h3>
                    <span className="posted_on">March. 15th</span>
                    <span className="comment">
                      <a href="">
                        21<i className="icon-speech-bubble"></i>
                      </a>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="fh5co-blog animate-box">
                  <a
                    href="#"
                    className="blog-img-holder"
                    style={{ backgroundImage: 'url(images/project-3.jpg)' }}
                  ></a>
                  <div className="blog-text">
                    <h3>
                      <a href="#">Healty Lifestyle &amp; Living</a>
                    </h3>
                    <span className="posted_on">March. 15th</span>
                    <span className="comment">
                      <a href="">
                        21<i className="icon-speech-bubble"></i>
                      </a>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-pricing" className="fh5co-bg-section">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                <h2>Plan &amp; Pricing</h2>
                <p>
                  Dignissimos asperiores vitae velit veniam totam fuga molestias
                  accusamus alias autem provident. Odit ab aliquam dolor eius.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="pricing pricing--rabten">
                <div className="col-md-4 animate-box">
                  <div className="pricing__item">
                    <div className="wrap-price">
                      <h3 className="pricing__title">Trial</h3>
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
                      <h3 className="pricing__title">Silver</h3>
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
                        <li className="pricing__feature">Standard Tutorials</li>
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
                      <h3 className="pricing__title">Gold</h3>
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
                        <li className="pricing__feature">Premium Tutorials</li>
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

        <div id="fh5co-gallery" className="fh5co-bg-section">
          <div className="row text-center">
            <h2>
              <span>Instagram Gallery</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-md-3 col-padded">
              <a
                href="#"
                className="gallery"
                style={{ backgroundImage: 'url(images/project-5.jpg)' }}
              ></a>
            </div>
            <div className="col-md-3 col-padded">
              <a
                href="#"
                className="gallery"
                style={{ backgroundImage: 'url(images/project-2.jpg)' }}
              ></a>
            </div>
            <div className="col-md-3 col-padded">
              <a
                href="#"
                className="gallery"
                style={{ backgroundImage: 'url(images/project-2.jpg)' }}
              ></a>
            </div>
            <div className="col-md-3 col-padded">
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <a
                href="#"
                className="gallery"
                style={{ backgroundImage: 'url(images/project-2.jpg)' }}
              ></a>
            </div>
          </div>
        </div>
      </MarketingTemplate>
    </div>
  );
}
