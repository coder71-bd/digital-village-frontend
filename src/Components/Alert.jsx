import swal from 'sweetalert';

const Alert = () => {
  const handleAlert = () => {
    swal({
      title: 'Are you sure?',
      // text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        console.log('ok');
        swal('Confirmed!', {
          icon: 'success',
        });
      }
    });
  };
  return (
    <div>
      <button onClick={handleAlert}>click</button>
    </div>
  );
};

export default Alert;
