// @flow
import React from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { baseURL } from '@/constants/index';
import Filestack from '@/components/filestack';
import { Message } from '@/components/alert/message';
// import ProgressLoader from '@/components/loaders';

type Props = {
  axiosMethod?: string,
  uploadUrl?: string,
  refetch?: any,
  FormInfo?: any,
  filestackOptions?: any,
  UploadMaxSize: number,
  acceptFileTypes: Array<any>,
  maxFiles: number,
  children: any,
  handleUpload?: any,
  performFunc?: any,
  imagesFunc?: Function,
  otherOption?: string,
  uploaderId?: string,
  platformSite?: boolean,
};

const MultiFilesUploader = (props: Props) => {
  const {
    axiosMethod,
    uploadUrl,
    refetch,
    FormInfo,
    filestackOptions,
    UploadMaxSize,
    acceptFileTypes,
    maxFiles,
    children,
    handleUpload,
    performFunc,
    imagesFunc,
    otherOption,
    uploaderId,
    platformSite,
  } = props;
  const isWindow = typeof window !== 'undefined';
  const uploadFile = useMutation(async e => {
    if (axiosMethod === 'post') {
      const res = await axios.post(`${baseURL}/v1/${uploadUrl}`, e);
      return res;
    }
    if (axiosMethod === 'put') {
      await axios.put(`${baseURL}/v1/${uploadUrl}`, e);
    }
    if (axiosMethod === 'patch') {
      await axios.patch(`${baseURL}/v1/${uploadUrl}`, e);
    }
  });
  const onFileUploadFinished = ({
    url,
    mimetype,
    filename,
    size,
    key,
    handle,
  }) => {
    if (uploadUrl) {
      const data = {
        ...FormInfo,
      };
      data.file_url = url;
      data.original_name = handle;
      data.file_size = size;
      data.file_type = mimetype;
      data.file_name = filename;
      console.log(FormInfo);
      console.log('data', data);
      uploadFile.mutate(data, {
        onSuccess: async res => {
          if (refetch) {
            await refetch();
          }
        },
        onError: e => Message.error(e, otherOption),
      });
    } else {
      handleUpload(url, mimetype, filename, size, key, handle);
    }
    return null;
  };

  const onFileUploadFailed = (file, error) => {
    const { message } = error;
    if (message) {
      Message.error({}, { message });
    } else {
      const otherOption = {
        heading: 'File Size Limit Exceeded ',
        message:
          'You have exceeded maximum allowed file size.' +
          ' Please upgrade your plan for full features.',
      };
      Message.error({}, otherOption);
    }
    return null;
  };

  const onUploadDone = () => {
    Message.success();
  };
  /** Filestack options */
  const options = {
    // accept: acceptFileTypes,
    maxFiles,
    maxSize: UploadMaxSize * 1024 * 1024,
    lang: 'en',
    uploadInBackground: false,
    fromSources: ['local_file_system'],
    onUploadDone,
    onFileUploadFinished,
    onFileUploadFailed,
    customText: {
      'Deselect All': 'Clear All',
    },
  };

  return (
    <React.Fragment>
      <Filestack id={uploaderId} options={options}>
        {children}
      </Filestack>
    </React.Fragment>
  );
};
export default MultiFilesUploader;
