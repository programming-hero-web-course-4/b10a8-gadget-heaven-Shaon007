const getStoredCartList = () => {
  const storedListStr = localStorage.getItem('cart-list');
  return storedListStr ? JSON.parse(storedListStr) : [];
};



const addToStoredCartList = (id) => {
  const storedList = getStoredCartList();
  if (!storedList.includes(id)) {
    storedList.push(id);
    localStorage.setItem('cart-list', JSON.stringify(storedList));
  } else {
    console.log(id, 'already exists in cart');
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem('wish-list');
  return storedWishListStr ? JSON.parse(storedWishListStr) : [];
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (!storedWishList.includes(id)) {
    storedWishList.push(id);
    localStorage.setItem('wish-list', JSON.stringify(storedWishList));
  } else {
    console.log(id, "already exists in wishlist");
  }
};

export { addToStoredCartList, addToStoredWishList, getStoredCartList, getStoredWishList };