// @flow
import React from 'react';
import Head from 'next/head';
import { useMutation } from 'react-query';
import { Formik } from 'formik';
import { Message } from '@/components/alert/message';
import Router from 'next/router';
import _omit from 'lodash.omit';
import MarketingHead from '../layouts/marketing-template/marketing-head';
import { CREATE_USER } from './queries';
import { CreateAccountForm } from './components';
import { validateSignUpForm } from './validation';

const CreateAccount = () => {
  const createUser = useMutation(CREATE_USER);
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
          <h4 className="card-title mt-3 text-center">Create Account</h4>
          <p className="text-center">Get started with your free account</p>
          <Formik
            initialValues={{
              email: '',
              name: '',
              password: '',
              confirm_password: '',
              phone_number: '',
            }}
            validationSchema={validateSignUpForm}
            onSubmit={async (values, actions) => {
              await createUser.mutate(_omit(values, 'confirm_password'), {
                onSuccess: async res => {
                  console.log(res);
                  localStorage.setItem('phone_number', values.phone_number);
                  localStorage.setItem('user_email', values.email);
                  Message.success();
                  actions.resetForm();
                  // eslint-disable-next-line max-len
                  await Router.push('/verification', '/verification', {
                    shallow: true,
                  });
                },
                onError: e => {
                  actions.setSubmitting(false);
                  Message.error(e);
                },
              });
            }}
          >
            {formikProps => <CreateAccountForm {...formikProps} />}
          </Formik>
        </article>
      </div>
    </React.Fragment>
  );
};
export default CreateAccount;
