import axios from 'axios';
import { baseURL } from '../../constants';

export const CREATE_USER = async e => {
  const res = await axios.post(`${baseURL}/v1/user`, e);
  return res.data;
};
