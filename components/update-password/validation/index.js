import * as Yup from 'yup';
import { PASSWORD_REGEX } from '@/constants/regex-constants';

export const validateLoginForm = Yup.object().shape({
  password: Yup.string()
    .required('Password is mandatory')
    .matches(
      PASSWORD_REGEX,
      'Password should have at least 8 characters,' +
        ' including one upper case, one lower case, one' +
        ' digit and one special character.',
    ),
  code: Yup.string().required('Code is mandatory'),
});
