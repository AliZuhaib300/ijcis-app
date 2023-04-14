import axios from 'axios';
import { baseURL } from '../../../constants';

export const UPDATE_USER = async e => {
  const res = await axios.patch(`${baseURL}/v1/user/${e.user_id}`, e.data);
  return res.data;
};

export const GET_USER_BY_ID = async key => {
  const { queryKey } = key;
  const res = await axios.get(`${baseURL}/v1/user/${queryKey[1].user_id}`);
  return res.data;
};
