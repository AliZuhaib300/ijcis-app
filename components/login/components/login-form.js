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
        <h4 className="card-title mt-3 text-center">Login Account</h4>
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
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={!dirty || isSubmitting}
            onClick={handleSubmit}
          >
            {' '}
            Login{' '}
          </button>
        </div>{' '}
        <p className="text-center">
          Forgot Password?
          <Link href="/forgot-password" as="/forgot-password">
            <a>
              <span> Click here </span>
            </a>
          </Link>{' '}
        </p>
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
