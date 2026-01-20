import React from 'react'

const Cart = ({ cart, removeFromCart, darkMode }) => {
  return (
    <div style={{
      backgroundColor: darkMode ? '#1e1e1e' : 'white',
      padding: '20px',
      borderRadius: '8px',
      minHeight: '200px'
    }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cart.map((item) => (
            <li 
              key={item.id} 
              data-testid={`cart-item-${item.id}`}
              style={{ 
                marginBottom: '10px', 
                padding: '10px',
                backgroundColor: darkMode ? '#2a2a2a' : '#f0f0f0',
                borderRadius: '4px'
              }}
            >
              {/* IMPORTANT: Exact text format the test expects */}
              <span data-testid={`cart-item-text-${item.id}`}>
                {item.name} is in your cart.
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginLeft: '10px',
                  padding: '5px 10px',
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                data-testid={`remove-${item.id}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart