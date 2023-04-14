import React from 'react';
import { Field } from 'formik';
import ReactQuill from '@/components/react-quill';
import { fieldValidate, fieldValidateBool } from '@/utils/form-utils';

type Props = {
  values: any,
  handleChange: Function,
  handleBlur: Function,
  errors: any,
  handleSubmit: any,
  dirty: boolean,
  isSubmitting: boolean,
  setFieldValue: any,
};
const BasicInfoForm = (props: Props) => {
  const {
    values,
    isSubmitting,
    dirty,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
    setFieldValue,
  } = props;

  console.log('errors', errors);
  console.log('values', values);
  return (
    <React.Fragment>
      <form>
        <div className="row">
          <div className="col-md-6">
            <Field name="Journal Title">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.journal_title
                        : 'Journal Title'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.journal_title}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder="Enter title"
                        name="journal_title"
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
            <Field name="Journal Initials">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.journal_initials
                        : 'Journal Initials'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.journal_initials}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder="Enter intitials"
                        name="journal_initials"
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
            <Field name="Journal Abbreviation">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.journal_abbreviation
                        : 'Journal Abbreviation'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.journal_abbreviation}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder="Enter Abbreviation"
                        name="journal_abbreviation"
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
            <Field name="Publisher">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.publisher
                        : 'Publisher'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.publisher}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder="Enter Publisher"
                        name="publisher"
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
            <Field name="Online ISSN">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.journal_issn
                        : 'Online ISSN'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.journal_issn}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder="Enter ISSN"
                        name="journal_issn"
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
            <Field name="journal_editor">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.journal_editor
                        : 'Journal Description'}
                    </label>
                    <div className="form-group">
                      <ReactQuill
                        type="text"
                        value={values.journal_editor}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder="Enter data"
                        name="journal_editor"
                        handleChange={value =>
                          setFieldValue('journal_editor', value)
                        }
                        // handleBlur={handleBlur}
                      />
                    </div>
                  </React.Fragment>
                );
              }}
            </Field>
          </div>
        </div>
        <div className="btn-space"></div>
        <button
          type="submit"
          className="btn btn-primary pull-right"
          disabled={!dirty || isSubmitting}
          onClick={handleSubmit}
        >
          {' '}
          Next{' '}
        </button>
        <div className="clearfix"></div>
      </form>
    </React.Fragment>
  );
};

export { BasicInfoForm };
