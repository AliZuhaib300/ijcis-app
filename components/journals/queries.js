// @flow
import axios from 'axios';
import { baseURL } from '@/constants/index';

export const GET_ALL_JOURNALS = async e => {
  const res = await axios.get(`${baseURL}/v1/journal/all-journals`, e);
  return res.data;
};
export const GET_JOURNAL_BY_ID = async key => {
  const { queryKey } = key;
  const res = await axios.get(
      `${baseURL}/v1/journal/${queryKey[1].journal_id}`,
  );
  return res.data;
};
// export const GET_ALL_CONTACTS = async e => {
//   const res = await axios.get(`${baseURL}/v1/contact/all-contacts`, e);
//   return res.data;
// };
// export const GET_ALL_SECTIONS = async e => {
//   const res = await axios.get(`${baseURL}/v1/section/all-sections`, e);
//   return res.data;
// };
