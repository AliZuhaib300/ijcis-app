import * as Yup from 'yup';

export const validateVerificationForm = Yup.object().shape({
  verification_code: Yup.number().required('Code is mandatory'),
  phone_number: Yup.string(),
  user_email: Yup.string()
    .email()
    .required('Code is mandatory'),
});
