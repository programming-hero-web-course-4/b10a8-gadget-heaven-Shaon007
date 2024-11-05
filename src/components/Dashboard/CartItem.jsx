const CartItem = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <button>Remove</button>
    </div>
  );
};

export default CartItem;
