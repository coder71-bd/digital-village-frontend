import axios from '../api/axios';

const sendNotification = async ({ title, email, message }) => {
  const response = await axios
    .post('/notification/add', { title, email, message })
    .then((resposne) => resposne.data);

  return response;
};

export default sendNotification;
