import axios from 'axios';
import { baseURL } from '../../constants';

export const VERIFY_USER = async e => {
  const res = await axios.post(`${baseURL}/v1/verification`, e);
  return res.data;
};
