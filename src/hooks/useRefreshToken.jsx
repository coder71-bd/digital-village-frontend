import { useDispatch, useSelector } from 'react-redux';
import { axiosPrivate } from '../api/axios';
import { setRoles, setToken } from '../redux/slices/user/userSlice';

const useRefreshToken = () => {
  const roles = useSelector((state) => state.user.roles);
  const dispatch = useDispatch();

  const refresh = async () => {
    try {
      const response = await axiosPrivate.get('/auth/refresh', {
        withCredentials: true,
      });
      dispatch(setRoles([...roles, response?.data?.roles]));
      dispatch(setToken(response?.data?.accessToken));
    } catch (error) {
      console.log(error.message);
    }
  };
  return refresh;
};

export default useRefreshToken;
