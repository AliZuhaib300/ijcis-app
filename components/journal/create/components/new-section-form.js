// @flow
import React from 'react';
import { Field } from 'formik';
import { fieldValidate, fieldValidateBool } from '@/utils/form-utils';

type Props = {
  values: any,
  handleChange: Function,
  handleBlur: Function,
  errors: any,
};

const NewSectionForm = (props: Props) => {
  const { values, handleChange, handleBlur, errors } = props;
  return (
    <div className="row">
      <div className="col-md-12">
        <Field name="title">
          {({ field, form }) => {
            return (
              <React.Fragment>
                <label className="bmd-label-floating">
                  {fieldValidateBool(field, form) ? errors.title : 'Title'}
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={values.title}
                    className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                    id="exampleInputEmail"
                    placeholder="Enter Title"
                    name="title"
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
  );
};

export { NewSectionForm };
