import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  quantityCart: 1,
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
