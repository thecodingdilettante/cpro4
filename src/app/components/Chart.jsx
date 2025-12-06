'use client';

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ products }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!Array.isArray(products) || products.length === 0) return;

    // Calculate average price per category with input validation
    const categoryPrices = Object.create(null);
    
    products.forEach((product) => {
      if (!product || typeof product !== 'object') return;
      
      const category = String(product.category || 'Unknown').slice(0, 100);
      const price = parseFloat(product.price);
      
      if (isNaN(price) || price < 0) return;
      
      if (!categoryPrices[category]) {
        categoryPrices[category] = [];
      }
      categoryPrices[category].push(price);
    });

    const categories = Object.keys(categoryPrices).sort();
    const averages = categories.map((cat) => {
      const prices = categoryPrices[cat];
      return (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2);
    });

    setChartData({
      labels: categories,
      datasets: [
        {
          label: 'Average Price by Category',
          data: averages,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  }, [products]);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div style={{ width: '500px', height: '300px', margin: '20px 0' }}>
      <h2>Average Price by Category</h2>
      <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
}
