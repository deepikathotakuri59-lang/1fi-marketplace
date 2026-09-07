import products from "../data/products"

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (!products || products.length === 0) {
          reject(new Error("No products available"))
          return
        }

        resolve(products)
      } catch {
        reject(new Error("Unable to load products"))
      }
    }, 800)
  })
}