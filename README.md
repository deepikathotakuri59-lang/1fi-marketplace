# 1Fi Marketplace

A responsive 1Fi Marketplace experience built as part of the SDE Intern assignment.

## Features

- Product listing
- Product images
- Product search
- Category filtering
- Product details
- Product variants
- EMI plan selection
- Selected EMI plan summary
- Proceed with Plan flow
- Loading state
- Error state with retry option
- Responsive design for desktop, tablet and mobile

## Products

The marketplace currently includes mock products from the following categories:

- Mobiles
- Laptops
- Televisions

## EMI Flow

Users can:

1. Browse marketplace products
2. Search for a product
3. Filter products by category
4. Open product details
5. Select a product variant
6. Select an EMI plan
7. Review the selected plan
8. Proceed with the selected plan

## Technology Used

- React
- Vite
- JavaScript
- CSS
- ESLint / Oxlint

## Project Structure

```text
1fi-assignment/
│
├── src/
│   ├── api/
│   │   └── productsApi.js
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
└── README.md