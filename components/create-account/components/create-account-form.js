// @flow

import React from 'react';
import { Field } from 'formik';
import { fieldValidate, fieldValidateBool } from '@/utils/form-utils';
import PhoneInput from 'react-phone-input-2';

type Props = {
  values: any,
  handleChange: Function,
  handleBlur: Function,
  errors: any,
  handleSubmit: any,
  dirty: boolean,
  isSubmitting: boolean,
};

const CreateAccountForm = (props: Props) => {
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
    <form>
      <Field name="name">
        {({ field, form }) => {
          return (
            <React.Fragment>
              {fieldValidateBool(field, form) ? (
                <small
                  className="form-text invalid-feedback"
                  style={{ fontSize: '100%', display: 'block' }}
                >
                  {' '}
                  {errors.name}
                </small>
              ) : (
                <label htmlFor="exampleInputEmail">Full Name</label>
              )}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  value={values.name}
                  className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                  id="exampleInputEmail"
                  placeholder="Enter your name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </React.Fragment>
          );
        }}
      </Field>
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
      <Field name="phone_number">
        {({ field, form }) => {
          return (
            <React.Fragment>
              {fieldValidateBool(field, form) ? (
                <small
                  className="form-text invalid-feedback"
                  style={{ fontSize: '100%', display: 'block' }}
                >
                  {' '}
                  {errors.phone_number}
                </small>
              ) : (
                <label htmlFor="exampleInputEmail">Phone Number</label>
              )}
              <div className="form-group">
                <PhoneInput
                  inputClass={`form-control
                        ${fieldValidate(field, form)}`}
                  value={values.phone_number}
                  onChange={phone =>
                    form.setFieldValue('phone_number', `+${phone}`)
                  }
                  onBlur={handleBlur}
                  inputStyle={{ marginLeft: '20px'}}
                />
              </div>
            </React.Fragment>
          );
        }}
      </Field>
      {/* <div className="form-group input-group"> */}
      {/*  <div className="input-group-prepend"> */}
      {/*    <span className="input-group-text"> */}
      {/*      {' '} */}
      {/*      <i className="fa fa-building"/>{' '} */}
      {/*    </span> */}
      {/*  </div> */}
      {/*  <select className="form-control"> */}
      {/*    <option selected=""> Select job type</option> */}
      {/*    <option>Designer</option> */}
      {/*    <option>Manager</option> */}
      {/*    <option>Accaunting</option> */}
      {/*  </select> */}
      {/* </div>{' '} */}
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
      <Field name="confirm_password">
        {({ field, form }) => {
          return (
            <React.Fragment>
              {fieldValidateBool(field, form) ? (
                <small
                  className="form-text invalid-feedback"
                  style={{ fontSize: '100%', display: 'block' }}
                >
                  {' '}
                  {errors.confirm_password}
                </small>
              ) : (
                <label htmlFor="exampleInputEmail">Confirm Password</label>
              )}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock" />
                  </span>
                </div>
                <input
                  type="password"
                  value={values.confirm_password}
                  className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                  id="exampleInputEmail"
                  placeholder="********"
                  name="confirm_password"
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
          Create Account{' '}
        </button>
      </div>{' '}
      <p className="text-center">
        Have an account? <a href="">Log In</a>{' '}
      </p>
    </form>
  );
};

export { CreateAccountForm };
