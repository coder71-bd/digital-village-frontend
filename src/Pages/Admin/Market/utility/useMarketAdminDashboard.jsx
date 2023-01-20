import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import {
  addProduct,
  deleteAProduct,
  updateAProduct,
} from '../../../../redux/slices/eMarket/productsSlice';

const useMarketAdminDashboard = () => {
  const dispatch = useDispatch();
  // delete Product
  const deleteProduct = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        dispatch(deleteAProduct(id));
        swal('Confirmed!', {
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  // update product
  const updateProduct = (id) => {
    const responce = dispatch(updateAProduct(id));
    if (!!responce.arg._id) {
      swal({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  // add a new Product
  const addANewProduct = (data) => {
    const response = dispatch(addProduct(data));
    if (!!response.arg.name) {
      swal({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return {
    deleteProduct,
    updateProduct,
    addANewProduct,
  };
};

export default useMarketAdminDashboard;
