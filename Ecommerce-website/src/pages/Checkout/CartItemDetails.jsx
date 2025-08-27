import { useState } from "react";
import axios from "axios";
import { formatMoney } from "../../utils/money"

export function CartItemDetails({ cartItem, deleteCartItem, loadCart }) {
  const [updateQuantity, setUpdateQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateCartItem = async () => {
    if (updateQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();

      setUpdateQuantity(false);
    } else {
      setUpdateQuantity(true);
    };
  };

  const updateQuantityInput = (event) => {
    setQuantity(event.target.value)
  };

    const handleQuantityKeyDown = (event) => {
    const keyPressed = event.key;

    if (keyPressed === 'Enter') {
     updateCartItem();

    } else if (keyPressed === 'Escape') {
      setQuantity(cartItem.quantity);
      setUpdateQuantity(false);
    }
  };


  return (

    <div className="cart-item-details">
      <div className="product-name">
        {cartItem.product.name}
      </div>
      <div className="product-price">
        {formatMoney(cartItem.product.priceCents)}
      </div>
      <div className="product-quantity">
        <span>
          Quantity: <span className="quantity-label">
            {updateQuantity
              ? <input type='text' style={{ width: 50 }} value={quantity} onChange={updateQuantityInput}     onKeyDown={handleQuantityKeyDown}/>
              : cartItem.quantity}</span>
        </span>
        <span className="update-quantity-link link-primary" onClick={updateCartItem}>
          Update
        </span>
        <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
          Delete
        </span>
      </div>
    </div>
  )
}