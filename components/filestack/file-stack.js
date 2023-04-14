// @flow
import React from 'react';
import * as filestack from 'filestack-js';
import { fileStackApiKey } from '@/constants/env';

type Props = {
  children: any,
  options: any,
  id?: String,
};

const Filestack = (props: Props) => {
  const { children, options, id = '' } = props;
  let picker = null;
  const client = filestack.init(fileStackApiKey);
  picker = client.picker(options);
  return (
    <span
      onClick={() => {
        if (picker) {
          picker.open();
        }
      }}
      id={id}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </span>
  );
};

export default Filestack;
