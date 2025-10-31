'use client';

export default function ProductCard({ product, onAdd, cart }) {
  const cartItem = cart?.find((item) => item.id === product.id);
  const qtyInCart = cartItem?.qty || 0;
  const disabled = product.stock <= qtyInCart;

  return (
    <div>
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}: {product.stock - qtyInCart > 0
            ? `${product.stock - qtyInCart} units in stock`
            : "Out of stock"}
        </p>

      <div>
        <button
          className={`add-to-cart ${disabled ? "disabled" : ''}`}
          onClick={() => onAdd(product)}
          disabled={disabled}
        >
          {disabled ? "Out of stock" : "Add to Cart"}
        </button>

        {qtyInCart > 0 && (
          <p>In cart: {qtyInCart}</p>
        )}
      </div><br></br>
    </div>
  );
}