// @flow
import React from 'react';
import SecureTemplate from '@/layout/secure-template';
import Router from 'next/router';
import { getLocalStorageValues } from '@/constants/local-storage';
import { GET_JOURNAL_BY_USER_ID } from '@/components/journal/queries';
import { TableHeadings } from '@/components/journal/components';
import { useQuery, useMutation } from 'react-query';
import _get from 'lodash/get';
import { Message } from '@/components/alert/message';
import { JOURNAL_PUBLISH } from './queries';

const Submission = () => {
  const { user_id } = getLocalStorageValues();
  const { data, isLoading, refetch } = useQuery(
    ['JOURNAL_BY_USER_ID', { user_id }],
    GET_JOURNAL_BY_USER_ID,
  );
  const publishJournal = useMutation(JOURNAL_PUBLISH);

  const handlePublishJournal = async (e, id) => {
    e.stopPropagation();
    await publishJournal.mutate(
      { journal_id: id },
      {
        onSuccess: async () => {
          await refetch();
          Router.push('/admin/submit/[submitId]', `/admin/submit/${id}`);
          Message.success();
        },
        onError: e => {
          Message.error(e);
        },
      },
    );
  };
  return (
    <SecureTemplate title="JournalPublishing">
      <div className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header card-header-primary">
              <h3 className="card-title">Journal Publishing</h3>
              <p className="card-category">
                Here you can upload your journal with proper information
              </p>
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
                            '/admin/submit/[submitId]',
                            `/admin/submit/${journal._id}`,
                            { shallow: true },
                          );
                        }}
                      >
                        <td>{i + 1}</td>
                        <td>{journal.journal_title}</td>
                        <td>{journal.journal_initials} </td>
                        <td>{journal.publisher}</td>
                        <td>
                          {journal.is_published ? 'Published' : 'Un-Published'}
                        </td>
                        {!journal.is_published && (
                          <td>
                            <button
                              type="submit"
                              onClick={e =>
                                handlePublishJournal(e, journal._id)
                              }
                            >
                              Publish Journal
                            </button>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecureTemplate>
  );
};
export default Submission;
