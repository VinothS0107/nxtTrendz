// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let price = 0

      const sumAmount = () => {
        cartList.forEach(each => {
          price += each.price * each.quantity
        })
        return price
      }

      return (
        <div className="mainBoxContainer">
          <div className="cart-summary-container">
            <h1 className="order-head">
              Order Total:
              <span className="amount-span"> Rs {sumAmount()} </span>
            </h1>
            <p className="details">{cartList.length} Items in Cart</p>
          </div>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
