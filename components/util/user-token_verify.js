// @flow
import axios from 'axios';

import { publicToken } from '@/constants/env';
import { getLocalStorageValues } from '@/constants/local-storage';

export const verifyUserToken = () => {
  const { bassline_auth_token } = getLocalStorageValues();
  if (bassline_auth_token) {
    axios.defaults.headers.common.Authorization = `Bearer ${bassline_auth_token}`;
  } else if (publicToken) {
    axios.defaults.headers.common.Authorization = `Public ${publicToken}`;
  }
};
