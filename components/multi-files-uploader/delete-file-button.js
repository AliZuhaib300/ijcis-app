// @flow
import React from 'react';
import axios from 'axios';
import { baseURL } from '@/constants/index';
import { useMutation } from 'react-query';
import { Message } from '@/components/alert/message';
import ProgressLoader from '@/components/loaders';
import { Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core';

type Props = {
  btnText: string,
  deleteUrl: string,
  refetch: any,
  deleteFileParams?: any,
  performDeleteFunc?: any,
};

const DeleteFileButton = (props: Props) => {
  const {
    btnText,
    deleteUrl,
    refetch,
    deleteFileParams,
    performDeleteFunc,
  } = props;
  const [DELETE_FILE, { isLoading }] = useMutation(async data => {
    await axios.delete(`${baseURL}/v1/${deleteUrl}`, {
      params: data,
    });
  });
  const handleDelete = () => {
    DELETE_FILE(deleteFileParams || null, {
      onError: e => Message.error(e),
      onSuccess: async () => {
        await refetch();
        if (performDeleteFunc) {
          await performDeleteFunc();
        }
        Message.success();
      },
    });
  };
  return (
    <React.Fragment>
      <Button
        size="small"
        variant="outlined"
        type="button"
        onClick={handleDelete}
      >
        <Delete />
      </Button>
      {isLoading && <ProgressLoader />}
    </React.Fragment>
  );
};

export { DeleteFileButton };
