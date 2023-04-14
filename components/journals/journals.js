import React from 'react';
import { useQuery } from 'react-query';
import _get from 'lodash/get';
import Link from 'next/link';
import { Banner } from '../common';
import MarketingTemplate from '../layouts/marketing-template';
import { Slider } from '../common/slider';
import { GET_ALL_JOURNALS } from './queries';

const Journals = () => {
  const { data } = useQuery(['GET_ALL_JOURNALS', {}], GET_ALL_JOURNALS);
  console.log('data', data);
  return (
    <div>
      <link href="styles.css?version=1" rel="stylesheet"></link>
      {/* <div class="fh5co-loader"></div> */}

      <div id="page">
        <MarketingTemplate>
          <Slider />
          <div id="fh5co-course">
            <div className="container">
              <div className="row animate-box">
                {/* eslint-disable-next-line max-len */}
                <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                  <h2>Our Course</h2>
                  <p>
                    Dignissimos asperiores vitae velit veniam totam fuga
                    molestias accusamus alias autem provident. Odit ab aliquam
                    dolor eius.
                  </p>
                </div>
              </div>
              <div className="row">
                {_get(data, 'data', []).map(journal => (
                  <div className="col-md-6 animate-box">
                    <div className="course">
                      <a
                        href="#"
                        className="course-img"
                        style={{
                          backgroundImage: 'url(images/project-1.jpg);',
                        }}
                      ></a>
                      <div className="desc">
                        <h3>
                          <a href="#">{journal.journal_title}</a>
                        </h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: journal.journal_editor,
                          }}
                        />
                        <span>
                          <Link href="/journals/view/[journalId]" as={`/journals/view/${journal._id}`}>
                            <a
                              href="#"
                              className="btn btn-primary btn-sm btn-course"
                            >
                              View Journal
                            </a>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
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
export default Journals;
