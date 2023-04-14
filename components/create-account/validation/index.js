import * as Yup from 'yup';
import { PASSWORD_REGEX } from '@/constants/regex-constants';

export const validateSignUpForm = Yup.object().shape({
  name: Yup.string().required('Name is mandatory'),
  email: Yup.string()
    .email('Email must be valid email')
    .required('Email is mandatory'),
  password: Yup.string()
    .required('Password is mandatory')
    .matches(
      PASSWORD_REGEX,
      'Password should have at least 8 characters,' +
        ' including one upper case, one lower case, one' +
        ' digit and one special character.',
    ),
  confirm_password: Yup.string()
    .required('Confirm Password is mandatory')
    .oneOf([Yup.ref('password'), null], 'Password does not match'),
});
