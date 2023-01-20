import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { setCart } from '../../../../redux/slices/eMarket/cartSlice';
import { setShowModal } from '../../../../redux/slices/eMarket/modalSlice';

const useCart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.market.cart.cart);
  // Handle Ok Alert
  const handleAlert = () => {
    swal({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  // Handle Problem Alert
  const handleProblemAlert = () => {
    swal({
      title: 'This Product is already in your cart',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
  };
  // Add a product in the cart
  const handleAddCart = (id, name, img, price) => {
    const cartItem = {
      id: id,
      name: name,
      img: img,
      price: price,
      quantity: 1,
      quantityBasePrice: price,
    };
    // Checking avialability
    const allProducts = cartProducts;
    const checkAvailability = (obj) => obj.id === id;

    if (allProducts.some(checkAvailability)) {
      handleProblemAlert();
    } else {
      dispatch(setCart(cartItem));
      handleAlert();
      dispatch(setShowModal(false));
    }
  };

  return {
    handleAlert,
    handleAddCart,
  };
};

export default useCart;
