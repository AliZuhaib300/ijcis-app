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
const Userform = (props: Props) => {
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
      <form>
        <div className="row">
          <div className="col-md-6">
            <Field name="username">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.user_name
                        : 'Username'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.user_name}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder="Enter your username"
                        name="user_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </React.Fragment>
                );
              }}
            </Field>
          </div>
          <div className="col-md-6">
            <Field name="email">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.email
                        : 'Email address'}
                    </label>
                    <div className="form-group">
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
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Field name="firstname">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.first_name
                        : 'First Name'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.first_name}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputfirstname"
                        placeholder="FirstName"
                        name="first_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </React.Fragment>
                );
              }}
            </Field>
          </div>
          <div className="col-md-6">
            <Field name="lastname">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.last_name
                        : 'Last Name'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.last_name}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputLastname"
                        placeholder="LastName"
                        name="last_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </React.Fragment>
                );
              }}
            </Field>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Field name="address">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.address
                        : 'Address'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.address}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputAddress"
                        placeholder="Enter your Address"
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </React.Fragment>
                );
              }}
            </Field>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Field name="city">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form) ? errors.city : 'City'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.city}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputCity"
                        placeholder="City"
                        name="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </React.Fragment>
                );
              }}
            </Field>
          </div>
          <div className="col-md-4">
            <Field name="country">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.country
                        : 'Country'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.country}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputCountry"
                        placeholder="Enter your Country"
                        name="country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </React.Fragment>
                );
              }}
            </Field>
          </div>
          <div className="col-md-4">
            <Field name="postalcode">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.postal_code
                        : 'PostalCode'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.postal_code}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputPostalcode"
                        placeholder="Enter your postalcode"
                        name="postal_code"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </React.Fragment>
                );
              }}
            </Field>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <Field name="aboutme">
                {({ field, form }) => {
                  return (
                    <React.Fragment>
                      <label className="bmd-label-floating">
                        {fieldValidateBool(field, form)
                          ? errors.about_me
                          : 'About Me'}
                      </label>
                      <div className="form-group">
                        <textarea
                          rows={5}
                          value={values.about_me}
                          className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                          id="exampleInputAboutme"
                          placeholder="  {' '}
                  Lamborghini Mercy, Your chick she so thirsty, I'm in that two
                  seat Lambo."
                          name="about_me"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </React.Fragment>
                  );
                }}
              </Field>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary pull-right"
          disabled={!dirty || isSubmitting}
          onClick={handleSubmit}
        >
          {' '}
          Update Profile{' '}
        </button>
        <div className="clearfix"></div>
      </form>
    </React.Fragment>
  );
};

export { Userform };
