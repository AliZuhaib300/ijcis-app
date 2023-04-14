// @flow
import React from 'react';
import { Field } from 'formik';
import { fieldValidate, fieldValidateBool } from '@/utils/form-utils';
import ReactQuill from '@/components/react-quill';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

type Props = {
  values: any,
  handleChange: Function,
  handleBlur: Function,
  errors: any,
  setFieldValue: any,
  checked: Function,
};

const EditSectionForm = (props: Props) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    setFieldValue,
    checked,
  } = props;
  return (
    <React.Fragment>
      <form>
        <div className="row">
          <div className="col-md-8">
            <Field name="section_title">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.section_title
                        : 'Section Title'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.section_title}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder="Articles"
                        name="section_title"
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
            <Field name="abbreviation">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.abbreviation
                        : 'Abbreviation'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.abbreviation}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder="ART"
                        name="abbreviation"
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
            <Field name="policy">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.policy
                        : 'Section Policy'}
                    </label>
                    <div className="form-group">
                      <ReactQuill
                        type="text"
                        value={values.policy}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder=""
                        name="policy"
                        handleChange={value => setFieldValue('policy', value)}
                      />
                    </div>
                  </React.Fragment>
                );
              }}
            </Field>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Field name="word_count">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.word_count
                        : 'Word Count'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.word_count}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder="0"
                        name="word_count"
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
          <div className="col-md-8">
            <Field name="options">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.options
                        : 'Options'}
                    </label>
                    <div className="form-group">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            value={values.options}
                            className={`${fieldValidate(field, form)}`}
                            id="exampleInputEmail"
                            name="options"
                          />
                        }
                        label="Do not require abstracts"
                      />
                    </div>
                  </React.Fragment>
                );
              }}
            </Field>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Field name="identify">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.identify
                        : 'Identify items published in this section as a(n)'}
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        value={values.identify}
                        className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                        id="exampleInputEmail"
                        placeholder="Peer-reviewed Article"
                        name="identify"
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
          <div className="col-md-8">
            <Field name="section_editors">
              {({ field, form }) => {
                return (
                  <React.Fragment>
                    <label className="bmd-label-floating">
                      {fieldValidateBool(field, form)
                        ? errors.section_editors
                        : 'Section Editors'}
                    </label>
                    <div className="form-group">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            value={values.section_editors}
                            className={`${fieldValidate(field, form)}`}
                            id="exampleInputEmail"
                            name="section_editors"
                          />
                        }
                        label="Do not require abstracts"
                      />
                    </div>
                  </React.Fragment>
                );
              }}
            </Field>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export { EditSectionForm };
