import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuthUrl } from '../../config/api.config';
import { EnumAsyncStorage, IAuthResponse } from '../../types/auth.interface';
import { request } from '../api/request.api';
import { deleteTokensFromStorage, saveUserToStorage } from './auth.helper';

export const AuthService = {
  async main(variant: 'reg' | 'login', email: string, password: string) {
    const respons = await request<IAuthResponse>({
      url: getAuthUrl(`/${variant === 'reg' ? 'register' : 'login'}`),
      method: 'POST',
      data: { email, password },
    });

    if (respons.accessToken) await saveUserToStorage(respons);

    return respons;
  },
  async logout() {
    await deleteTokensFromStorage();
    await AsyncStorage.removeItem(EnumAsyncStorage.USER);
  },
};
