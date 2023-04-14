// @flow
import React from 'react';
import { Field } from 'formik';
import { fieldValidate, fieldValidateBool } from '@/utils/form-utils';
import Link from 'next/link';

type Props = {
  values: any,
  handleChange: Function,
  handleBlur: Function,
  errors: any,
  handleSubmit: any,
  dirty: boolean,
  isSubmitting: boolean,
};

const LoginForm = (props: Props) => {
  const {
    values,
    isSubmitting,
    dirty,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
  } = props;
  return (
    <React.Fragment>
      <form className="loginform">
        <h4 className="card-title mt-3 text-center">Update Password</h4>
        <Field name="password">
          {({ field, form }) => {
            return (
              <React.Fragment>
                {fieldValidateBool(field, form) ? (
                  <small
                    className="form-text invalid-feedback"
                    style={{ fontSize: '100%', display: 'block' }}
                  >
                    {' '}
                    {errors.password}
                  </small>
                ) : (
                  <label htmlFor="exampleInputEmail">Password</label>
                )}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock" />
                    </span>
                  </div>
                  <input
                    type="password"
                    value={values.password}
                    className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                    id="exampleInputEmail"
                    placeholder="********"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </React.Fragment>
            );
          }}
        </Field>
        <Field name="code">
          {({ field, form }) => {
            return (
              <React.Fragment>
                {fieldValidateBool(field, form) ? (
                  <small
                    className="form-text invalid-feedback"
                    style={{ fontSize: '100%', display: 'block' }}
                  >
                    {' '}
                    {errors.code}
                  </small>
                ) : (
                  <label htmlFor="exampleInputEmail">Email Verify Code</label>
                )}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock" />
                    </span>
                  </div>
                  <input
                    type="code"
                    value={values.code}
                    className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                    id="exampleInputEmail"
                    placeholder="********"
                    name="code"
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
            Update Password{' '}
          </button>
        </div>{' '}
      </form>
    </React.Fragment>
  );
};
export { LoginForm };
