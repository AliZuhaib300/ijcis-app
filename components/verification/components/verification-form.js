// @flow

import React from 'react';
import { Field } from 'formik';
import { fieldValidate, fieldValidateBool } from '@/utils/form-utils';

type Props = {
  values: any,
  handleChange: Function,
  handleBlur: Function,
  errors: any,
  handleSubmit: any,
  dirty: boolean,
  isSubmitting: boolean,
};

const VerificationForm = (props: Props) => {
  const {
    values,
    isSubmitting,
    dirty,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
  } = props;
  // eslint-disable-next-line no-console
  console.log('errors', errors);
  // eslint-disable-next-line no-console
  console.log('values', values);
  return (
    <React.Fragment>
      <form className="loginform">
        <h4 className="card-title mt-3 text-center">Verification</h4>
        <Field name="verification_code">
          {({ field, form }) => {
            return (
              <React.Fragment>
                {fieldValidateBool(field, form) ? (
                  <small
                    className="form-text invalid-feedback"
                    style={{ fontSize: '100%', display: 'block' }}
                  >
                    {' '}
                    {errors.verification_code}
                  </small>
                ) : (
                  <label htmlFor="exampleInputEmail">Verification Code</label>
                )}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    value={values.verification_code}
                    className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                    id="exampleInputEmail"
                    placeholder="Enter your code"
                    name="verification_code"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </React.Fragment>
            );
          }}
        </Field>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={!dirty || isSubmitting}
            onClick={handleSubmit}
          >
            {' '}
            Verify Account{' '}
          </button>
        </div>{' '}
      </form>
    </React.Fragment>
  );
};

export { VerificationForm };
