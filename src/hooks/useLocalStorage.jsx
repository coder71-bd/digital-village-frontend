const useLocalStorage = () => {
  const getDB = () => localStorage.getItem('cart');
  const updateDb = (cart) => localStorage.setItem('cart', JSON.stringify(cart));

  // Set A new Cart to the Local Storage
  const setCart = (id, address) => {
    const exist = getDB();
    let cart = {};
    if (!exist) {
      cart['items'] = JSON.stringify({ ids: id, address: address });
    } else {
      cart = JSON.parse(exist);
      if (cart['items']) {
        cart['items'] = JSON.stringify({ ids: id, address: address });
      } else {
        cart['items'] = JSON.stringify({ ids: id, address: address });
      }
    }
    updateDb(cart);
  };

  // Delete a Cart From the Local Storage
  const deleteDB = (name, address) => {
    const exist = getDB();
    if (!exist) {
    } else {
      const cart = JSON.parse(exist);
      delete cart[name];
      delete cart[address];
      updateDb(cart);
    }
  };

  // Get the cart from the Local Storage

  const getSavedCart = () => {
    const exist = getDB();
    return exist ? JSON.parse(exist) : {};
  };

  return {
    setCart,
    deleteDB,
    getSavedCart,
  };
};
export default useLocalStorage;
