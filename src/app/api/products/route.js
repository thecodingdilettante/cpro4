export async function GET() {
  const products = [
    { id: "p1", name: "Pencil", price: 4, category: "Writing Utensils", stock: 5 },
    { id: "p2", name: "Looseleaf Paper", price: 8, category: "Paper", stock: 3 },
    { id: "p3", name: "Ballpoint Pen", price: 5, category: "Writing Utensils", stock: 4 },
    { id: "p4", name: "Notebook", price: 12, category: "Paper", stock: 6 },
    { id: "p5", name: "Fountain Pen", price: 50, category: "Writing Utensils", stock: 10 },
    { id: "p6", name: "Cardstock", price: 20, category: "Paper", stock: 15 },
    { id: "p7", name: "Crayons", price: 7, category: "Writing Utensils", stock: 8},
    { id: "p8", name: "Gluestick", price: 4, category: "Miscellany", stock: 12 }
  ];
  return Response.json(products);
}