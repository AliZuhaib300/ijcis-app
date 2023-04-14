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
        <h4 className="card-title mt-3 text-center">Forgot Password</h4>
        <Field name="email">
          {({ field, form }) => {
            return (
              <React.Fragment>
                {fieldValidateBool(field, form) ? (
                  <small
                    className="form-text invalid-feedback"
                    style={{ fontSize: '100%', display: 'block' }}
                  >
                    {' '}
                    {errors.email}
                  </small>
                ) : (
                  <label htmlFor="exampleInputEmail">Email</label>
                )}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                  <input
                    type="text"
                    value={values.email}
                    className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                    id="exampleInputEmail"
                    placeholder="Enter your email"
                    name="email"
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
            Forgot Password{' '}
          </button>
        </div>{' '}
        <p className="text-center">
          Create an Account?
          <Link href="/create-account" as="/create-account">
            <a>
              <span> Sign Up </span>
            </a>
          </Link>{' '}
        </p>
      </form>
    </React.Fragment>
  );
};
export { LoginForm };
