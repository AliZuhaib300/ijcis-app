import React from 'react';
import { Formik } from 'formik';
import { Message } from '@/components/alert/message';
import { useMutation, useQuery } from 'react-query';
import {
  GET_CONTACT_BY_JOURNAL_ID,
  SAVE_CONTACT,
  UPDATE_CONTACT,
} from '@/components/journal/create/queries';
import { getLocalStorageValues } from '@/constants/local-storage';
import _get from 'lodash/get';
import { ContactForm } from './index';
import { validateContact } from '../validation';

const Contact = () => {
  const { journal_id } = getLocalStorageValues();
  const { data, isloading, refetch } = useQuery(
    ['GET_CONTACT_BY_JOURNAL_ID', { journal_id }],
    GET_CONTACT_BY_JOURNAL_ID,
  );
  console.log('contact data', data);
  const saveContact = useMutation(SAVE_CONTACT);
  const updateContact = useMutation(UPDATE_CONTACT);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: _get(data, 'data.name', ''),
        email: _get(data, 'data.email', ''),
        phone: _get(data, 'data.phone', ''),
        affiliation: _get(data, 'data.affiliation', ''),
        address: _get(data, 'data.address', ''),
        journal_id,
      }}
      validationSchema={validateContact}
      onSubmit={async (values, actions) => {
        if (_get(data, 'data._id')) {
          await updateContact.mutate(
            {
              contact_id: _get(data, 'data._id'),
              data: values,
            },
            {
              onSuccess: async res => {
                await refetch();
                Message.success();
                actions.resetForm();
                // setValue(value + 1);
              },
              onError: e => {
                actions.setSubmitting(false);
                Message.error(e);
              },
            },
          );
          return;
        }
        await saveContact.mutate(values, {
          onSuccess: async res => {
            await refetch();
            Message.success();
            actions.resetForm();
            // setValue(value + 1);
          },
          onError: e => {
            actions.setSubmitting(false);
            Message.error(e);
          },
        });
      }}
    >
      {formikProps => <ContactForm {...formikProps} />}
    </Formik>
  );
};
export { Contact };
