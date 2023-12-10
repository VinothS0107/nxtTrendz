import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  quantityCart: 1,
  isSelected: false,
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  onSelectCheck: () => {},
})

export default CartContext
