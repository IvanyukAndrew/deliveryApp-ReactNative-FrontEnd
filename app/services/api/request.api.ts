import { AxiosRequestConfig } from './../../../node_modules/axios/index.d';
import { AxiosError, AxiosResponse } from 'axios';
import Toast from 'react-native-toast-message';
import { errorCatch } from './error.api';
import instance from './interceptors.api';

export const request = async <T>(config: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse<T>) => response.data;

  const onError = (error: AxiosError) => {
    Toast.show({
      type: 'error',
      text1: 'Request error',
      text2: errorCatch(error),
    });

    return Promise.reject(error);
  };

  return instance(config).then(onSuccess).catch(onError);
};
