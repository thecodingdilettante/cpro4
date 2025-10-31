'use client';
import ProductCard from './ProductCard.jsx';

export default function ProductList({ products, onAdd, cart }) {
  return (
    <div>
      {products.map(p => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} cart={cart || []} />
      ))}
    </div>
  );
}