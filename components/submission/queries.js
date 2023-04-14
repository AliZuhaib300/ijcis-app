// @flow
import axios from 'axios';
import { baseURL } from '@/constants/index';

export const JOURNAL_PUBLISH = async e => {
  const res = await axios.post(`${baseURL}/v1/journal/publish-journal`, e);
  return res.data;
};