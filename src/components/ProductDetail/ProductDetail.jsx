import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => {
        const foundProduct = data.find(item => item.product_id.toString() === product_id); 
        setProduct(foundProduct);
      });
  }, [product_id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.product_title}</h1>
      <img src={product.product_image} alt={product.product_title} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
