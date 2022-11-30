import axios from 'axios'

import authService from '../auth';
import debug from "../debug";

const httpsService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

httpsService.interceptors.request.use(
  async (config) => {
    const token = authService.getAuthToken();

    if (token.length) {
      config.headers = {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`,
      };
    }

    return config;
  }, 
  (error) => {
    debug.error('Failed to set auth token beforeRequest:\n', error);

    return Promise.reject(error);
  },
);

httpsService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);

    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await authService.requestNewTokens().then((resp) => {
          authService.setAuthTokens({
            access: resp?.access,
            refresh: resp?.refresh,
          });
        });

        const token = await authService.getAuthToken();

        axios.defaults.headers.common['Authorization'] = `JWT ${token}`;

        return httpsService(originalRequest);
      } catch (error) {
        debug.error('Failed to update token: ', error);

        throw error;
      }
    }

    // if (response.status === 403) {
    //   store.dispatch(CurrentUserThunks.logout());
    // }

    return Promise.reject(error);
  },
);

export default httpsService;