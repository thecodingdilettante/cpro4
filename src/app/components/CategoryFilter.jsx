'use client';

export default function CategoryFilter({value, onChange}) {
    const categories = ["All", "Writing Utensils", "Paper", "Miscellany"];
    return( 
        <div>
            <label>Category: </label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
    );
}