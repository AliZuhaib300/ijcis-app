// @flow
import axios from 'axios';
import { baseURL } from '@/constants/index';

export const JOURNAL_MAST = async e => {
  const res = await axios.post(`${baseURL}/v1/journal`, e);
  return res.data;
};

export const GET_JOURNAL_BY_ID = async key => {
  const { queryKey } = key;
  const res = await axios.get(
    `${baseURL}/v1/journal/${queryKey[1].journal_id}`,
  );
  return res.data;
};
export const SAVE_CONTACT = async e => {
  const res = await axios.post(`${baseURL}/v1/contact/`, e);
  return res.data;
};

export const UPDATE_CONTACT = async e => {
  const res = await axios.patch(`${baseURL}/v1/contact/${e.contact_id}`, e.data);
  return res.data;
};
export const GET_CONTACT_BY_JOURNAL_ID = async key => {
  const { queryKey } = key;
  const res = await axios.get(
    `${baseURL}/v1/contact/journal_id/${queryKey[1].journal_id}`,
  );
  return res.data;
};
export const SAVE_SECTION = async e => {
  const res = await axios.post(`${baseURL}/v1/section`, e);
  return res.data;
};

export const GET_SECTION_BY_JOURNAL_ID = async key => {
  const { queryKey } = key;
  const res = await axios.get(
    `${baseURL}/v1/section/journal_id/${queryKey[1].journal_id}`,
  );
  return res.data;
};
export const UPDATE_SECTION = async e => {
  const res = await axios.patch(
    `${baseURL}/v1/section/${e.section_id}`,
    e.data,
  );
  return res.data;
};
export const GET_SECTION_BY_ID = async key => {
  const { queryKey } = key;
  const res = await axios.get(
    `${baseURL}/v1/section/${queryKey[1].section_id}`,
  );
  return res.data;
};
