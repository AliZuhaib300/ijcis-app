import axios from 'axios';
import { baseURL } from '../../constants';

export const FORGOT_USER = async e => {
  const res = await axios.post(`${baseURL}/v1/login/forgot-pass`, e);
  return res.data;
};
