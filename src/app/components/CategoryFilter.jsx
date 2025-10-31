'use client';

export default function CategoryFilter({chosenCategory, setChosenCategory}) {
  const categories = ["All", "Writing Utensils", "Paper", "Miscellany"];
  return (
        <div>
            <h2> Filter by Category</h2>
            {categories.map(category => (
                <label key={category}>
                <input type="checkbox" value={category} checked={chosenCategory === category}
                onChange={(e) => setChosenCategory(e.target.value)}/>
                {category}
                </label>
            ))}
        </div>
    );
}

