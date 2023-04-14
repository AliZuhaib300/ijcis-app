import React from 'react';
import { fieldValidate, fieldValidateBool } from '@/utils/form-utils';
import { Field } from 'formik';

type Props = {
  values: any,
  handleChange: Function,
  handleBlur: Function,
  errors: any,
  handleSubmit: any,
  dirty: boolean,
  isSubmitting: boolean,
};
const ContactForm = (props: Props) => {
  const {
    values,
    isSubmitting,
    dirty,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
  } = props;
  console.log('errors', errors);
  console.log('values', values);
  return (
    <React.Fragment>
      <form>
        <div className="row">
          <div className="col-md-6">
            <Field name="Name">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.name
                        : 'Journal Title'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.name}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputName"
                        placeholder="Enter Name"
                        name="name"
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
            <Field name="Email">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.email
                        : 'Journal Title'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.email}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputName"
                        placeholder="Enter Email"
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
          <div className="col-md-6">
            <Field name="Affiliation">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.affiliation
                        : 'Journal Title'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.affiliation}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputName"
                        placeholder="Enter Affiliation"
                        name="affiliation"
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
            <Field name="Phone">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.phone
                        : 'Journal Title'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.phone}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputName"
                        placeholder="Enter Mailing Address"
                        name="phone"
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
            <Field name="Address">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.address
                        : 'Journal Title'}
                    </label>
                    <div className="form-group">
                      <textarea
                        rows={5}
                        type="text"
                        value={values.address}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputName"
                        placeholder="
             8888 University Dr, Burnaby, BC V5A 1S6
             "
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
          <div className="col-md-12"></div>
        </div>
        <button
          type="submit"
          className="btn btn-primary pull-right"
          disabled={!dirty || isSubmitting}
          onClick={handleSubmit}
        >
          {' '}
          Save & Continue{' '}
        </button>
        <div className="clearfix"></div>
      </form>
    </React.Fragment>
  );
};

export { ContactForm };
