'use client';

export default function PriceFilter({ value, onChange }) {
  return (
    <div>
      <label>Max Price: </label>
      <input
        type="number"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}