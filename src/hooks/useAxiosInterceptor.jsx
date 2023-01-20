import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { axiosPrivate } from '../api/axios';
import useRefreshToken from './useRefreshToken';

const useAxiosInterceptor = () => {
  const refresh = useRefreshToken();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevReq = err?.config;
        if (err?.response?.status === 403 && !prevReq?.sent) {
          const newAccessToken = await refresh();
          prevReq.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevReq);
        }
        return Promise.reject(err);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [token, refresh]);

  return axiosPrivate;
};

export default useAxiosInterceptor;
