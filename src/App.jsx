import { useEffect, useState } from "react"
import { getProducts } from "./api/productsApi"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("marketplace")

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState("")
  const [selectedEmi, setSelectedEmi] = useState(null)

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const [showConfirmation, setShowConfirmation] = useState(false)

  const categories = [
    "All",
    "Mobiles",
    "Laptops",
    "Televisions",
  ]

  const loadProducts = async () => {
    try {
      setLoading(true)
      setError("")

      const data = await getProducts()

      setProducts(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const openProduct = (product) => {
    setSelectedProduct(product)
    setSelectedVariant(product.variants[0])
    setSelectedEmi(product.emiPlans[0])
    setShowConfirmation(false)
  }

  const closeProduct = () => {
    setSelectedProduct(null)
    setSelectedVariant("")
    setSelectedEmi(null)
    setShowConfirmation(false)
  }

  const proceedWithPlan = () => {
    setShowConfirmation(true)
  }

  if (selectedProduct) {
    return (
      <div className="app">
        <button
          className="back-button"
          onClick={closeProduct}
        >
          ← Back to Marketplace
        </button>

        <div className="details">
          <div className="details-image">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />
          </div>

          <div className="details-content">
            <p className="category">
              {selectedProduct.category}
            </p>

            <h1>{selectedProduct.name}</h1>

            <p className="price">
              ₹{selectedProduct.price.toLocaleString()}
            </p>

            <p className="no-cost-emi">
              ✓ No-cost EMI available
            </p>

            <h3>Select Variant</h3>

            <div className="options">
              {selectedProduct.variants.map((variant) => (
                <button
                  key={variant}
                  className={
                    selectedVariant === variant
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant}
                </button>
              ))}
            </div>

            <h3>Select EMI Plan</h3>

            <div className="emi-options">
              {selectedProduct.emiPlans.map((plan) => (
                <button
                  key={plan.months}
                  className={
                    selectedEmi?.months === plan.months
                      ? "emi-option selected"
                      : "emi-option"
                  }
                  onClick={() => setSelectedEmi(plan)}
                >
                  <strong>
                    {plan.months} Months
                  </strong>

                  <span>
                    ₹{plan.amount.toLocaleString()}/month
                  </span>
                </button>
              ))}
            </div>

            {selectedEmi && (
              <div className="selected-plan">
                <p>Selected EMI Plan</p>

                <strong>
                  {selectedEmi.months} Months
                </strong>

                <span>
                  ₹{selectedEmi.amount.toLocaleString()}/month
                </span>
              </div>
            )}

            <button
              className="proceed-button"
              onClick={proceedWithPlan}
            >
              Proceed with Plan →
            </button>

            {showConfirmation && (
              <div className="confirmation-box">
                <div className="success-icon">✓</div>

                <h3>Plan Selected Successfully!</h3>

                <p>
                  You selected:
                </p>

                <strong>
                  {selectedProduct.name}
                </strong>

                <span>
                  {selectedVariant}
                </span>

                <span>
                  {selectedEmi.months} Months EMI
                </span>

                <span>
                  ₹{selectedEmi.amount.toLocaleString()}/month
                </span>

                <button
                  className="continue-button"
                  onClick={() =>
                    alert("Thank you! Your request has been submitted.")
                  }
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Shop</h1>

        <p>
          Explore products and flexible payment options
        </p>
      </div>

      <div className="shop-tabs">
        <button
          className={
            activeSection === "brands"
              ? "shop-tab active"
              : "shop-tab"
          }
          onClick={() => setActiveSection("brands")}
        >
          Top Brands
        </button>

        <button
          className={
            activeSection === "nearby"
              ? "shop-tab active"
              : "shop-tab"
          }
          onClick={() => setActiveSection("nearby")}
        >
          Nearby Stores
        </button>

        <button
          className={
            activeSection === "marketplace"
              ? "shop-tab active"
              : "shop-tab"
          }
          onClick={() => setActiveSection("marketplace")}
        >
          1Fi Marketplace
        </button>
      </div>

      {activeSection === "brands" && (
        <div className="empty-section">
          <h2>Top Brands</h2>
        </div>
      )}

      {activeSection === "nearby" && (
        <div className="empty-section">
          <h2>Nearby Stores</h2>
        </div>
      )}

      {activeSection === "marketplace" && (
        <>
          <div className="marketplace-heading">
            <h2>1Fi Marketplace</h2>

            <p>
              Browse products with flexible EMI plans
            </p>
          </div>

          {loading && (
            <div className="status-box">
              <div className="loader"></div>

              <h3>Loading products...</h3>

              <p>
                Please wait while we load the marketplace.
              </p>
            </div>
          )}

          {!loading && error && (
            <div className="status-box error-box">
              <h3>Unable to load products</h3>

              <p>{error}</p>

              <button
                className="retry-button"
                onClick={loadProducts}
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="search-section">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                />
              </div>

              <div className="category-filter">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={
                      selectedCategory === category
                        ? "category-button active"
                        : "category-button"
                    }
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>

              {filteredProducts.length > 0 ? (
                <div className="products">
                  {filteredProducts.map((product) => (
                    <div
                      className="product-card"
                      key={product.id}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <h2>{product.name}</h2>

                      <p className="category">
                        {product.category}
                      </p>

                      <p className="price">
                        ₹{product.price.toLocaleString()}
                      </p>

                      <p className="emi">
                        EMI from ₹
                        {product.emiPlans[0].amount.toLocaleString()}
                        /month
                      </p>

                      <button
                        onClick={() => openProduct(product)}
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-products">
                  <h3>No products found</h3>

                  <p>
                    Try another search or category.
                  </p>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default App