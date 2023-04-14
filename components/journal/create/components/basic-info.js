import React from 'react';
import { Formik } from 'formik';
import { Message } from '@/components/alert/message';
import { getLocalStorageValues } from '@/constants/local-storage';
import Router, { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import _get from 'lodash/get';
import { GET_JOURNAL_BY_ID, JOURNAL_MAST } from '../queries';
import { validateJournal } from '../validation';
import { BasicInfoForm } from './index';

type Props = {
  setValue: any,
  value: any,
};

const BasicInfo = (props: Props) => {
  const { setValue, value } = props;
  const saveJournal = useMutation(JOURNAL_MAST);
  const { user_id } = getLocalStorageValues();
  const router = useRouter();
  const { journalId: journal_id } = router.query;
  const { data, isLoaing, refetch } = useQuery(
    ['JOURNAL_BY_ID', { journal_id }],
    GET_JOURNAL_BY_ID,
    {
      enabled: !!journal_id,
    },
  );
  console.log('data', data);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        journal_title: _get(data, 'data.journal_title', ''),
        journal_initials: _get(data, 'data. journal_initials', ''),
        journal_abbreviation: _get(data, 'data.journal_abbreviation', ''),
        publisher: _get(data, 'data.publisher', ''),
        journal_issn: _get(data, 'data.journal_issn', ''),
        journal_editor: _get(data, 'data.journal_editor', ''),
        user_id,
      }}
      validationSchema={validateJournal}
      onSubmit={async (values, actions) => {
        if (!journal_id) {
          await saveJournal.mutate(values, {
            onSuccess: async res => {
              await refetch();
              console.log(res);
              localStorage.setItem('journal_id', _get(res, 'data._id'));
              Message.success();
              actions.resetForm();
              setValue(value + 1);
            },
            onError: e => {
              actions.setSubmitting(false);
              Message.error(e);
            },
          });
        }
      }}
    >
      {formikProps => <BasicInfoForm {...formikProps} />}
    </Formik>
  );
};
export { BasicInfo };
