import React from 'react';
import Head from 'next/head';

const Slider = () => {
  return (
    <div>
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Head>
      <div className="container-slider">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img
                src="https://www.dublintown.ie/wp-content/uploads/2019/08/Books-Upstairs.jpg"
                alt="Los Angeles"
                style={{ width: '100%', height: '400px' }}
              />
            </div>

            <div className="item">
              <img
                src="https://fbcoverstreet.com/thumbnail/vGdsMDuLe8Qlk8EUyvqEPGor8q55FaAep6vjlaSEuAoK3jLdQ2K2fElobvtfHyFD.webp"
                alt="books"
                style={{ width: '100%', height: '400px' }}
              />
            </div>

            <div className="item">
              <img
                src="http://myfbcover.com/download/?cover_name=Books&cur_img_path=http://static.myfbcover.com/covers/Others/Books.jpg&cover_url=Books"
                alt="New york"
                style={{ width: '100%', height: '400px' }}
              />
            </div>
          </div>
          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export { Slider };
