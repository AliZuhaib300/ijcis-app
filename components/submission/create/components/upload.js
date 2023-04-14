import React from 'react';
import { Button } from '@material-ui/core';
import MultiFilesUploader from '@/components/multi-files-uploader';
import { getLocalStorageValues } from '@/constants/local-storage';
import { useQuery } from 'react-query';
import _get from 'lodash/get';
import { useRouter } from 'next/router';
import { GET_FILE_BY_JOURNAL_ID } from '../queries';

const Upload = () => {
  const router = useRouter();
  const { submitId: journal_id } = router.query;
  const uploadURL = 'submission/upload-files';
  console.log('journal_id', journal_id);
  const { data, refetch } = useQuery(
    ['GET_FILE_BY_JOURNAL_ID', { journal_id }],
    GET_FILE_BY_JOURNAL_ID,
    {
      enabled: !!journal_id,
    },
  );
  console.log('data', data);
  return (
    <div>
      <MultiFilesUploader
        axiosMethod="post"
        uploadUrl={uploadURL}
        maxFiles={2}
        FormInfo={{ journal_id }}
        UploadMaxSize={100}
        acceptFileTypes={['images/jpg', 'images/jpeg', 'images/png']}
        filestackOptions={{}}
        refetch={refetch}
      >
        <Button variant="contained" color="secondary" className="mb-3">
          Upload
        </Button>
      </MultiFilesUploader>
      {_get(data, 'data', []).map(file => (
        <a href={file.file_url} target="_blank">
          <li>{file.file_name}</li>
        </a>
      ))}
    </div>
  );
};
export { Upload };
