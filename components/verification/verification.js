import React from 'react';
import MarketingHead from '@/layout/marketing-template/marketing-head';
import { useMutation } from 'react-query';
import { Formik } from 'formik';
import { Message } from '@/components/alert/message';
import Router from 'next/router';
// eslint-disable-next-line import/named
import { getLocalStorageValues } from '@/constants/local-storage';
import Head from 'next/head';
import { VERIFY_USER } from './queries';
import { VerificationForm } from './components';
import { validateVerificationForm } from './validation';

const Verification = () => {
  const { ijcis_phone_number, user_email } = getLocalStorageValues();
  const verifyUser = useMutation(VERIFY_USER);
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
        <article className="card-body mx-auto" style={{ maxWidth: '400px;' }} s>
          <Formik
            initialValues={{
              user_email,
              verification_code: '',
              phone_number: ijcis_phone_number,
            }}
            validationSchema={validateVerificationForm}
            onSubmit={async (values, actions) => {
              await verifyUser.mutate(values, {
                onSuccess: async res => {
                  // eslint-disable-next-line no-console
                  console.log(res);
                  Message.success();
                  actions.resetForm();
                  // eslint-disable-next-line max-len
                  await Router.push('/login', '/login', {
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
            {formikProps => <VerificationForm {...formikProps} />}
          </Formik>
        </article>
      </div>
    </React.Fragment>
  );
};
export default Verification;
