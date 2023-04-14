import * as Yup from 'yup';

export const validateUpdateUser = Yup.object().shape({
  email: Yup.string()
    .email('Email must be valid email')
    .required('Email is mandatory'),
  user_name: Yup.string(),
  first_name: Yup.string(),
  last_name: Yup.string(),
  address: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  postal_code: Yup.number(),
  about_me: Yup.string(),
});
