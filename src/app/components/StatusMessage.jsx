'use client';

export default function StatusMessage({ type }) {
  const messages = {
    loading: "Products loading",
    error: "Please try again.",
    empty: "No products found with your filters.",
  };

  return (
    <div>
      <p>{messages[type]}</p>
    </div>
  );
}