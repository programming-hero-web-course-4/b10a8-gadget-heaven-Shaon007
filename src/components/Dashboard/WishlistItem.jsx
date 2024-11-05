const WishlistItem = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default WishlistItem;
