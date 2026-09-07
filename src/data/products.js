const macbookImage = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="#f5f5f5"/>
  
  <!-- Laptop screen -->
  <rect x="180" y="70" width="440" height="300" rx="18" fill="#222"/>
  <rect x="200" y="90" width="400" height="260" rx="8" fill="#dfe8f5"/>
  
  <!-- Screen content -->
  <rect x="220" y="110" width="160" height="100" rx="8" fill="#ffffff"/>
  <rect x="400" y="110" width="180" height="20" rx="10" fill="#ffffff"/>
  <rect x="400" y="145" width="140" height="15" rx="7" fill="#ffffff"/>
  <rect x="220" y="230" width="360" height="80" rx="10" fill="#ffffff"/>
  
  <!-- Apple-like logo -->
  <circle cx="400" cy="220" r="28" fill="#777"/>
  <circle cx="425" cy="195" r="10" fill="#777"/>
  
  <!-- Laptop base -->
  <path d="M130 370 L670 370 L720 420 Q725 435 700 440 L100 440 Q75 435 80 420 Z"
        fill="#bfc3c8"/>
  <rect x="320" y="390" width="160" height="12" rx="6" fill="#8d9298"/>
  
  <!-- Text -->
  <text x="400" y="475" text-anchor="middle"
        font-family="Arial" font-size="28" fill="#333">
    MacBook Air
  </text>
</svg>
`)}`

const products = [
  {
    id: 1,
    name: "Apple iPhone 16",
    category: "Mobiles",
    price: 79999,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
    variants: ["128 GB", "256 GB"],
    emiPlans: [
      { months: 6, amount: 13333 },
      { months: 12, amount: 6667 },
      { months: 18, amount: 4444 },
    ],
  },

  {
    id: 2,
    name: "Samsung Galaxy S25",
    category: "Mobiles",
    price: 74999,
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
    variants: ["128 GB", "256 GB"],
    emiPlans: [
      { months: 6, amount: 12500 },
      { months: 12, amount: 6250 },
      { months: 18, amount: 4167 },
    ],
  },

  {
    id: 3,
    name: "MacBook Air",
    category: "Laptops",
    price: 99999,
    image: macbookImage,
    variants: ["256 GB", "512 GB"],
    emiPlans: [
      { months: 6, amount: 16667 },
      { months: 12, amount: 8333 },
      { months: 18, amount: 5556 },
    ],
  },

  {
    id: 4,
    name: 'Sony Bravia 55"',
    category: "Televisions",
    price: 69999,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
    variants: ["55 inch", "65 inch"],
    emiPlans: [
      { months: 6, amount: 11667 },
      { months: 12, amount: 5833 },
      { months: 18, amount: 3889 },
    ],
  },
]

export default products