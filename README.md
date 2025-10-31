<h1>Coding Project — Next.js “Mini Storefront” (React)</h1>

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<h1>Overview</h1>

Build a small Next.js web app that renders a Mini Storefront component. Students will scaffold a Next.js project, implement stateful React UI with accessible controls, and deploy it to GitHub.


<h1>Getting Started</h1>

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

(This project was built by using npx create-next-app@latest mini-storefront, selecting YES or NO for recommended add-ons, and cd mini-storefront before using the above npm run dev.)

<h1>Checklist</h1>

<ul><li>Catalog.jsx: Fetch API data (initial load), shared state for filters + cart, interval stock updates with cleanup - YES
<li>ProductList.jsx: Maps products to cards (key={id}) - YES
<li>ProductCard.jsx: Disable Add button if out of stock; show “Out of stock” - YES
<li>CategoryFilter + PriceFilter: Controlled inputs that update parent state - YES
<li>CartSummary.jsx: Show item count + total price; decrement and reset actions - YES
<li>StatusMessage.jsx: Shows correct message based on state (loading, error, or empty) - YES
</ul>

<h1>Known Issues/Limitations</h1>

None identified.

