import swal from 'sweetalert';

const giveAlert = (message, type) => {
  swal({
    text: message,
    icon: type,
  });
};

export { giveAlert };
