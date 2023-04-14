// @flow
import axios from 'axios';
import { baseURL } from '@/constants/index';

export const GET_FILE_BY_JOURNAL_ID = async key => {
  const { queryKey } = key;
  const res = await axios.get(
    `${baseURL}/v1/submission/files-journal_id/${queryKey[1].journal_id}`,
  );
  return res.data;
};
