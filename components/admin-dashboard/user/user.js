import React from 'react';
import { Formik } from 'formik';
import { Userform } from '@/components/admin-dashboard/user/components';
import {
  UPDATE_USER,
  GET_USER_BY_ID,
} from '@/components/admin-dashboard/user/queries';
import { Message } from '@/components/alert/message';
import Router from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { getLocalStorageValues } from '@/constants/local-storage';
import _get from 'lodash/get';
import { validateUpdateUser } from './validation';
import SecureTemplate from '../../layouts/secure-template';

const User = () => {
  const updateUser = useMutation(UPDATE_USER);
  const { user_id } = getLocalStorageValues();
  // eslint-disable-next-line no-unused-vars
  const { data, isLoaing, refetch } = useQuery(
    ['USER_BY_ID', { user_id, id: 'acac' }],
    GET_USER_BY_ID,
  );
  console.log('data', data);
  return (
    <div>
      <div className="">
        <SecureTemplate title="Tables">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header card-header-primary">
                      <h4 className="card-title">Edit Profile</h4>
                      <p className="card-category">Complete your profile</p>
                    </div>
                    <div className="card-body">
                      <Formik
                        enableReinitialize={true}
                        initialValues={{
                          email: _get(data, 'data.email', ''),
                          user_name: _get(data, 'data.user_name', ''),
                          first_name: _get(data, 'data.first_name', ''),
                          last_name: _get(data, 'data.last_name', ''),
                          address: _get(data, 'data.address', ''),
                          city: _get(data, 'data.city', ''),
                          country: _get(data, 'data.country', ''),
                          postal_code: _get(data, 'data.postal_code', ''),
                          about_me: _get(data, 'data.about_me', ''),
                        }}
                        validationSchema={validateUpdateUser}
                        onSubmit={async (values, actions) => {
                          await updateUser.mutate(
                            {
                              data: values,
                              user_id,
                            },
                            {
                              onSuccess: async res => {
                                await refetch();
                                Message.success();
                                actions.resetForm();
                                await Router.push({
                                  shallow: true,
                                });
                              },
                              onError: e => {
                                actions.setSubmitting(false);
                                Message.error(e);
                              },
                            },
                          );
                        }}
                      >
                        {formikProps => <Userform {...formikProps} />}
                      </Formik>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-profile">
                    <div className="card-avatar">
                      <a href="javascript:;">
                        <img
                          className="img"
                          src="../assets/img/faces/marc.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <h6 className="card-category text-gray">
                        CEO / Co-Founder
                      </h6>
                      <h4 className="card-title">Alec Thompson</h4>
                      <p className="card-description">
                        Don't be scared of the truth because we need to restart
                        the human foundation in truth And I love you like Kanye
                        loves Kanye I love Rick Owens’ bed design but the back
                        is...
                      </p>
                      <a
                        href="javascript:;"
                        className="btn btn-primary btn-round"
                      >
                        Follow
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SecureTemplate>
        <div className="fixed-plugin">
          <div className="dropdown show-dropdown">
            <a href="#" data-toggle="dropdown">
              <i className="fa fa-cog fa-2x"> </i>
            </a>
            <ul className="dropdown-menu">
              <li className="header-title"> Sidebar Filters</li>
              <li className="adjustments-line">
                <a
                  href="javascript:void(0)"
                  className="switch-trigger active-color"
                >
                  <div className="badge-colors ml-auto mr-auto">
                    <span
                      className="badge filter badge-purple"
                      data-color="purple"
                    ></span>
                    <span
                      className="badge filter badge-azure"
                      data-color="azure"
                    ></span>
                    <span
                      className="badge filter badge-green"
                      data-color="green"
                    ></span>
                    <span
                      className="badge filter badge-warning"
                      data-color="orange"
                    ></span>
                    <span
                      className="badge filter badge-danger"
                      data-color="danger"
                    ></span>
                    <span
                      className="badge filter badge-rose active"
                      data-color="rose"
                    ></span>
                  </div>
                  <div className="clearfix"></div>
                </a>
              </li>
              <li className="header-title">Images</li>
              <li className="active">
                <a
                  className="img-holder switch-trigger"
                  href="javascript:void(0)"
                >
                  <img src="../assets/img/sidebar-1.jpg" alt="" />
                </a>
              </li>
              <li>
                <a
                  className="img-holder switch-trigger"
                  href="javascript:void(0)"
                >
                  <img src="../assets/img/sidebar-2.jpg" alt="" />
                </a>
              </li>
              <li>
                <a
                  className="img-holder switch-trigger"
                  href="javascript:void(0)"
                >
                  <img src="../assets/img/sidebar-3.jpg" alt="" />
                </a>
              </li>
              <li>
                <a
                  className="img-holder switch-trigger"
                  href="javascript:void(0)"
                >
                  <img src="../assets/img/sidebar-4.jpg" alt="" />
                </a>
              </li>
              <li className="button-container">
                <a
                  href="https://www.creative-tim.com/product/material-dashboard"
                  target="_blank"
                  className="btn btn-primary btn-block"
                >
                  Free Download
                </a>
              </li>

              <li className="button-container">
                <a
                  href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html"
                  target="_blank"
                  className="btn btn-default btn-block"
                >
                  View Documentation
                </a>
              </li>
              <li className="button-container github-star">
                <a
                  className="github-button"
                  href="https://github.com/creativetimofficial/material-dashboard"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star ntkme/github-buttons on GitHub"
                >
                  Star
                </a>
              </li>
              <li className="header-title">Thank you for 95 shares!</li>
              <li className="button-container text-center">
                <button id="twitter" className="btn btn-round btn-twitter">
                  <i className="fa fa-twitter"></i> &middot; 45
                </button>
                <button id="facebook" className="btn btn-round btn-facebook">
                  <i className="fa fa-facebook-f"></i> &middot; 50
                </button>
                <br />
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
