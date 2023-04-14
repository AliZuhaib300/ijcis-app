// @flow
import React from 'react';
import MarketingTemplate from '../layouts/marketing-template';
import { Slider } from '../common/slider';

const About = () => {
  return (
    <MarketingTemplate>
      <Slider />

      <div id="fh5co-about">
        <div className="container">
          <div className="col-md-6 animate-box">
            <span>About Our University</span>
            <h2>Welcome to Education Website</h2>
            <p>
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat cauctor eu in elit. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per Mauris in erat justo.
            </p>
            <p>
              Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
              non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
              nunc. Etiam pharetra, erat sed.
            </p>
            <p>
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat cauctor eu in elit. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per Mauris in erat justo.
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="img-responsive"
              src="images/img_bg_2.jpg"
              alt="Free HTML5 Bootstrap Template"
            />
          </div>
        </div>
      </div>

      <div
        id="fh5co-counter"
        className="fh5co-counters"
        style={{ 'background-image': 'url(images/img_bg_4.jpg);' }}
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
                  <span className="fh5co-counter-label">Foreign Followers</span>
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
                  <span className="fh5co-counter-label">Students Enrolled</span>
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
                  <span className="fh5co-counter-label">Classes Complete</span>
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

      <div id="fh5co-course-categories">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
              <h2>Course categories</h2>
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
        id="fh5co-register"
        style={{ 'background-image': 'url(images/img_bg_2.jpg);' }}
      >
        <div className="overlay"></div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 animate-box">
            <div className="date-counter text-center">
              <h2>Get 400 of Online Courses for Free</h2>
              <h3>By Mike Smith</h3>
              <div className="simply-countdown simply-countdown-one"></div>
              <p>
                <strong>Limited Offer, Hurry Up!</strong>
              </p>
              <p>
                <a href="#" className="btn btn-primary btn-lg btn-reg">
                  Register Now!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

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
              style={{ 'background-image': 'url(images/project-5.jpg);' }}
            ></a>
          </div>
          <div className="col-md-3 col-padded">
            <a
              href="#"
              className="gallery"
              style={{ 'background-image': 'url(images/project-2.jpg);' }}
            ></a>
          </div>
          <div className="col-md-3 col-padded">
            <a
              href="#"
              className="gallery"
              style={{ 'background-image': 'url(images/project-3.jpg);' }}
            ></a>
          </div>
          <div className="col-md-3 col-padded">
            <a
              href="#"
              className="gallery"
              style={{ 'background-image': 'url(images/project-4.jpg);' }}
            ></a>
          </div>
        </div>
      </div>
    </MarketingTemplate>
  );
};
export default About;
