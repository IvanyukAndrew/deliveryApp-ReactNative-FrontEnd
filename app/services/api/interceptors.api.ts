import axios from 'axios';
import { API_URL } from '../../config/api.config';
import { deleteTokensFromStorage, getAccessToken } from '../auth/auth.helper';
import { errorCatch } from './error.api';
import { getNewTokens } from './helper.api';

const instance = axios.create({
  baseURL: 'http://192.168.0.109:4200/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      ((error.response && error.response.status === 401) ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') await deleteTokensFromStorage();
      }
    }

    throw error;
  },
);

export default instance;
