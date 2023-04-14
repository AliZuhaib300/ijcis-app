import axios from 'axios';
import { baseURL } from '../../constants';

export const UPDATE_USER = async e => {
  const res = await axios.post(`${baseURL}/v1/login/update-pass`, e);
  return res.data;
};
