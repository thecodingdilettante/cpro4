'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import CartSummary from './CartSummary';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('all');
  const [price, setPrice] = useState(0);

{/*API*/}
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products/route.js");
        if (!res.ok) throw new Error("Cannot fetch products.");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

{/*Add Item Ability*/}
  const AddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === product.id);
      if (existing) {
        if (existing.qty < product.stock) {
          return prevCart.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          );
        } else {
          alert("This product is out of stock.");
          return prevCart;
        }
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

 {/*Remove Item Ability*/}
  const RemoveFromCart = (id) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === id);
      if (!existing) return prevCart;
      if (existing.qty > 1) {
        return prevCart.map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        );
      }
      return prevCart.filter((i) => i.id !== id);
    });
  };

{/*Product List Filter Ability*/}
  const filtered = products.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      p.price <= price
  );

  {/*Reset ability*/}
  const ResetCart = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    const confirmed = confirm("This will clear your cart. Are you sure?");
    if (confirmed) {
      setCart([]);
    }
  };

  {/*RETURN*/}
  return (
    <div>
        <h1>Mini Storefront</h1>

          <label>Category: </label>
          <select     
            value={category}
            onChange={(e) => setCategory(e.target.value)}>

            <option value="all">All</option>
            <option value="Writing Utensils">Writing Utensils</option>
            <option value="Paper">Paper</option>
            <option value="Miscellany">Miscellany</option>
          </select>

{/*Product List Filtered*/}
      <section>
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={AddToCart}
            cart={cart}
          />
        ))}
      </section>

{/*Price Slider*/}

        <div>
          <label>Max Price: ${price}</label>
          <input
            type="range"
            min="0"
            max="50"
            step="5"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

<br></br><br></br>

{/*Summary and Reset*/}
<br></br>
        <CartSummary cart={cart} onRemove={RemoveFromCart} />
        <br></br><div>
          <button onClick={ResetCart}>Reset Cart</button>
        </div>
      </div>
    
  );
}