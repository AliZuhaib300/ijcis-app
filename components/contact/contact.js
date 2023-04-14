import React from 'react';
import { Banner } from '../common';
import MarketingTemplate from '../layouts/marketing-template';
import { Slider } from '../common/slider';

const Contact = () => {
  return (
    <div>
      {/* <div class="fh5co-loader"></div> */}

      <div id="page">
        <MarketingTemplate>
          <Slider />
          <div id="fh5co-contact">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-md-push-1 animate-box">
                  <div className="fh5co-contact-info">
                    <h3>Contact Information</h3>
                    <ul>
                      <li className="address">
                        198 West 21th Street, <br /> Suite 721 New York NY 10016
                      </li>
                      <li className="phone">
                        <a href="tel://1234567920">+ 1235 2355 98</a>
                      </li>
                      <li className="email">
                        <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                      </li>
                      <li className="url">
                        <a href="http://freehtml5.co">freeHTML5.co</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <h3>Get In Touch</h3>
                  <form action="#">
                    <div className="row form-group">
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="fname"
                          className="form-control"
                          placeholder="Your firstname"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="lname"
                          className="form-control"
                          placeholder="Your lastname"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          placeholder="Your email address"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="subject"
                          className="form-control"
                          placeholder="Your subject of this message"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          className="form-control"
                          placeholder="Say something about us"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div id="map" className="fh5co-map"></div>

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
export default Contact;
