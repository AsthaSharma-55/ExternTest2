import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function CartPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const price = searchParams.get('price');

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const storedQuantity = localStorage.getItem('cartQuantity');
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartQuantity', quantity.toString());
  }, [quantity]);

  const handleAddItem = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotal = () => {
    const totalPrice = price ? parseFloat(price) * quantity : 0;
    return totalPrice.toFixed(2);
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <p>Total: {calculateTotal()}</p>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleRemoveItem}>Remove Item</button>
    </div>
  );
}

export default CartPage;
