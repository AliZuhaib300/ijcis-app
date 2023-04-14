import React from 'react';

const Banner = () => {
  return (
    <div>
      <div
        id="fh5co-register"
        style={{ backgroundImage: 'url(images/img_bg_2.jpg);' }}
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
      )
    </div>
  );
};
export { Banner };
