import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import useMediaQuery from '../hooks/useMediaQuery';

const NewAlert = ({ content }) => {
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    html: content,
    showDenyButton: true,
    confirmButtonText: 'Update',
    denyButtonText: `Cancel`,
    width: `${isDesktop} ? '50%' : ${isTablet} ? '80%' : '95%'`,
    scrollbarPadding: false,
  }).then((result) => {
    if (result.isConfirmed) {
      console.log('updated');
    }
  });
  return <div></div>;
};

export default NewAlert;
