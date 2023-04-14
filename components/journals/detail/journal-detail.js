// @flow
import React from 'react';
import { useQuery } from 'react-query';
import _get from 'lodash/get';
import { useRouter } from 'next/router';
import { GET_JOURNAL_BY_ID } from '../queries';
// import { GET_SECTION_BY_JOURNAL_ID } from '@/components/journal/create/queries';

const JournalDetail = () => {
  const router = useRouter();
  const { journalId } = router.query;
  // const { data } = useQuery(['GET_JOURNAL_BY_ID', {}], GET_JOURNAL_BY_ID);
  // console.log('data', data);
  // const { data } = useQuery(['GET_ALL_JOURNALS', {}], GET_ALL_JOURNALS);
  // console.log('data', data);
  const { data } = useQuery(
    ['JOURNAL_BY_ID', { journal_id: journalId }],
    GET_JOURNAL_BY_ID,
  );
  console.log('data', data);
  return (
    <div>
      <h3 className="card-title">Journal Form</h3>
      <p className="card-category">
        Here you can upload your journal with proper information
      </p>
      <h2>Journal Name: {_get(data, 'data.journal_title')}</h2>
      {_get(data, 'data.is_published') && (
        <div className="row">
          {/* {_get(data, 'data', []).map(section => ( */}
          {/*    <h3>{section.title}</h3> */}
          {/* ))} */}
        </div>
      )}
      {!_get(data, 'data.is_published') && (
        <div className="row">No published yet!</div>
      )}
    </div>
  );
};
export default JournalDetail;
