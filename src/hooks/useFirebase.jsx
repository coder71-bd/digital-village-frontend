import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios, { axiosPrivate } from '../api/axios';
import initializeAuthentication from '../Firebase/Firebase.init';
import {
  getSingleUserInfo,
  setRoles,
  setToken,
  setUId,
  setUser,
} from '../redux/slices/user/userSlice';

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const user = useSelector((state) => state.user.user);
  const [isLoading, setIsLoading] = useState(true); // user using the login functionality
  const [authError, setAuthError] = useState('');
  const roles = useSelector((state) => state.user.roles);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const processSignInWithGoogle = (location, navigate) => {
    setIsLoading(true); // user trying to log with google

    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { user } = result;

        const newUser = {
          name: user.displayName,
          email: user.email,
          dateOfBirth: 'unavailable',
          password: 'noneedofpassword',
          emailVerified: user.emailVerified,
        };

        // REGISTER USER IN DATABASE
        registerToDB(newUser, location, navigate);

        setIsLoading(false);
      })
      .catch((error) => setAuthError(error.message));
  };

  //REGISTRATION PROCESS OF USER
  const processSignUp = ({ email, password }) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //USER LOGIN PROCESS
  const processSignIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // change the user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const newUser = {
          name: authUser?.displayName,
          email: authUser?.email,
          dateOfBirth: user?.dateOfBirth || 'unknown',
          emailVerified: authUser?.emailVerified,
        };
        dispatch(setUser(newUser));
        dispatch(getSingleUserInfo(authUser?.email));
      } else {
        dispatch(setUser({}));
      }
      setIsLoading(false); // as the user state changed so we are not in loading state
    });
    return () => unsubscribed;
  }, [auth]);

  //process user logout
  const logout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      localStorage.setItem('persist:digital_village_storage', {});
      logoutFromDB();
    } catch (error) {
      console.log(error);
      setAuthError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const registerToDB = async (newUser, location, navigate) => {
    const response = await axios.post('/auth/register', newUser);

    dispatch(setRoles([...roles, response?.data?.roles]));
    dispatch(setToken(response?.data?.accessToken));
    dispatch(setUId(response?.data?.uId));
    dispatch(setUser(newUser));
    dispatch(getSingleUserInfo(newUser.email));

    const redirect_uri = location?.state?.from || '/';
    navigate(redirect_uri);
  };

  const loginToDB = async (email, password) => {
    try {
      const response = await axios.post(
        '/auth/login',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(setRoles([...roles, response?.data?.roles]));
      dispatch(setToken(response?.data?.accessToken));
      dispatch(setUId(response?.data?.uId));

      dispatch(getSingleUserInfo(email)); // get the user all info for profile page
      console.log(response?.data?.message);
      console.log(user, 'this is the user');
    } catch (error) {
      console.log(error.message);
      setAuthError(error.message);
    }
  };

  const logoutFromDB = async () => {
    const response = await axiosPrivate.get('/auth/logout');
    dispatch(setUser({}));
    setAuthError('');
    dispatch(setRoles([]));
    dispatch(setToken(''));
    dispatch(setUId(''));
    console.log(response?.data);
  };

  return {
    user,
    isLoading,
    setIsLoading,
    setAuthError,
    loginToDB,
    auth,
    roles,
    setRoles,
    token,
    setToken,
    authError,
    processSignInWithGoogle,
    processSignUp,
    processSignIn,
    registerToDB,
    logout,
  };
};

export default useFirebase;
