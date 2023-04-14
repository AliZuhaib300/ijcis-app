// @flow
import React from 'react';
import SecureTemplate from '@/layout/secure-template';
import Router from 'next/router';
import { useQuery, useMutation } from 'react-query';
import { getLocalStorageValues } from '@/constants/local-storage';
import {
  DEL_JOURNAL_BY_ID,
  GET_JOURNAL_BY_USER_ID,
} from '@/components/journal/queries';
import _get from 'lodash/get';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { JOURNAL_MAST } from '@/components/journal/create/queries';
// import { UPDATE_USER } from '@/components/admin-dashboard/user/queries';
import { Message } from '@/components/alert/message';
import { TableHeadings } from './components';

const JournalManager = () => {
  const { user_id } = getLocalStorageValues();
  const { data, isLoading, refetch } = useQuery(
    ['JOURNAL_BY_USER_ID', { user_id }],
    GET_JOURNAL_BY_USER_ID,
  );
  const delJournalById = useMutation(DEL_JOURNAL_BY_ID);
  console.log('data', data);
  const handleDeleteJournal = async (e, id) => {
    e.stopPropagation();
    await delJournalById.mutate(id, {
      onSuccess: async () => {
        await refetch();
        Message.success();
      },
      onError: e => {
        Message.error(e);
      },
    });
  };
  return (
    <div className="">
      <SecureTemplate title="Tables">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header card-header-primary">
                    <button
                      className="btn btn-primary float-right"
                      onClick={() =>
                        Router.push(
                          '/admin/journal/create',
                          '/admin/journal/create',
                          {
                            shallow: true,
                          },
                        )
                      }
                    >
                      Create Journal
                    </button>
                    <h4 className="card-title ">Journals</h4>
                    <p className="card-category"> Here are the journals</p>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <TableHeadings />
                        <tbody>
                          {_get(data, 'data', []).map((journal, i) => (
                            <tr
                              key={i}
                              onClick={e => {
                                e.stopPropagation();
                                Router.push(
                                  '/admin/journal/detail/[journalId]',
                                  `/admin/journal/detail/${journal._id}`,
                                  { shallow: true },
                                );
                              }}
                            >
                              <td>{i + 1}</td>
                              <td>{journal.journal_title}</td>
                              <td>{journal.journal_initials} </td>
                              <td>{journal.publisher}</td>
                              <td>{journal.is_published ? 'Published' : 'Un-Published'}</td>
                              <td>
                                <button
                                  type="submit"
                                  onClick={e =>
                                    handleDeleteJournal(e, journal._id)
                                  }
                                >
                                  Delete Journal
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card card-plain">
              <div className="card-body">
                <div className="table-responsive"></div>
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
  );
};
export default JournalManager;
