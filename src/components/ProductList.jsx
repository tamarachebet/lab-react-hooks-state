import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ products, addToCart, darkMode, category }) => {
  // Use products prop if provided, otherwise use sampleProducts
  const displayProducts = products || sampleProducts

  return (
    <div>
      <h2>Available Products</h2>
      
      {displayProducts.length === 0 ? (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          backgroundColor: darkMode ? '#1e1e1e' : 'white',
          borderRadius: '8px',
          color: darkMode ? '#aaa' : '#666'
        }}>
          {/* Test expects this exact text */}
          <p>No products available in this category</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {displayProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              addToCart={addToCart}
              darkMode={darkMode}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList