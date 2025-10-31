'use client';

export default function CartSummary({ cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      Your Cart Summary:
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              
                <button onClick={() => onRemove(item.id)}></button>
                <span>{item.qty}x </span>
                <span>{item.name} = </span>
             
              <span>
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </div>
          ))}

          <div>
            <br></br>
            <span>Grand Total: </span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}