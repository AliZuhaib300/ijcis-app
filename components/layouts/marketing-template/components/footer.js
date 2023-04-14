import React from 'react';

const Footer = () => {
  return (
    <footer
      id="fh5co-footer"
      role="contentinfo"
      style={{ backgroundImage: 'url(images/img_bg_4.jpg)' }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row row-pb-md">
          <div className="col-md-3 fh5co-widget">
            <h3>About Education</h3>
            <p>
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
              reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
            </p>
          </div>
          <div
            className="col-md-2 col-sm-4
               col-xs-6 col-md-push-1 fh5co-widget"
          >
            <h3>Learning</h3>
            <ul className="fh5co-footer-links">
              <li>
                <a href="#">Course</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Meetups</a>
              </li>
            </ul>
          </div>
          <div
            className="col-md-2 col-sm-4
               col-xs-6 col-md-push-1 fh5co-widget"
          >
            <h3>Learn &amp; Grow</h3>
            <ul className="fh5co-footer-links">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Handbook</a>
              </li>
              <li>
                <a href="#">Held Desk</a>
              </li>
            </ul>
          </div>

          <div
            className="col-md-2 col-sm-4
               col-xs-6 col-md-push-1 fh5co-widget"
          >
            <h3>Engage us</h3>
            <ul className="fh5co-footer-links">
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Visual Assistant</a>
              </li>
              <li>
                <a href="#">System Analysis</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
          </div>

          <div
            className="col-md-2 col-sm-4
               col-xs-6 col-md-push-1 fh5co-widget"
          >
            <h3>Legal</h3>
            <ul className="fh5co-footer-links">
              <li>
                <a href="#">Find Designers</a>
              </li>
              <li>
                <a href="#">Find Developers</a>
              </li>
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row copyright">
          <div className="col-md-12 text-center">
            <p>
              <small className="block">
                &copy; 2016 Free HTML5. All Rights Reserved.
              </small>
              <small className="block">
                Designed by{' '}
                <a href="http://freehtml5.co/" target="_blank">
                  FreeHTML5.co
                </a>{' '}
                Demo Images:{' '}
                <a href="http://unsplash.co/" target="_blank">
                  Unsplash
                </a>{' '}
                &amp;{' '}
                <a href="https://www.pexels.com/" target="_blank">
                  Pexels
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
