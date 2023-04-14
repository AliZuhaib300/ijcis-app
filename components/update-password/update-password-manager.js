// @flow
import React from 'react';
import Head from 'next/head';
import { Formik } from 'formik';
import { useMutation } from 'react-query';
import { Message } from '@/components/alert/message';
import Router from 'next/router';
import _get from 'lodash/get';
import MarketingHead from '../layouts/marketing-template/marketing-head';
import { LoginForm } from './components';
import { validateLoginForm } from './validation';
import { UPDATE_USER } from './queries';

const UpdatePasswordManager = () => {
  const updateUser = useMutation(UPDATE_USER);
  return (
    <React.Fragment>
      <MarketingHead />
      <Head>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
      </Head>
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ maxWidth: '400px;' }}>
          <Formik
            initialValues={{
              password: '',
              code: '',
            }}
            validationSchema={validateLoginForm}
            onSubmit={async (values, actions) => {
              await updateUser.mutate(
                { ...values, email: localStorage.getItem('user_email') },
                {
                  onSuccess: async res => {
                    // eslint-disable-next-line no-console
                    console.log(res);
                    localStorage.setItem('user_id', _get(res, 'data._id'));
                    Message.success();
                    actions.resetForm();
                    await Router.push('/login', '/login', { shallow: true });
                  },
                  onError: e => {
                    actions.setSubmitting(false);
                    Message.error(e);
                  },
                },
              );
            }}
          >
            {formikProps => <LoginForm {...formikProps} />}
          </Formik>
        </article>
      </div>
    </React.Fragment>
  );
};
export default UpdatePasswordManager;
