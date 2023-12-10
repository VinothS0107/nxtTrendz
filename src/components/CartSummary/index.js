// Write your code here
import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, isSelected, onSelectCheck} = value
      let price = 0

      const sumAmount = () => {
        cartList.forEach(each => {
          price += each.price * each.quantity
        })
        return price
      }

      const totalAmount = sumAmount()

      const onSelected = () => {
        onSelectCheck()
      }

      return (
        <div className="mainBoxContainer">
          <div className="cart-summary-container">
            <h1 className="order-head">
              Order Total:
              <span className="amount-span"> Rs {totalAmount} -/ </span>
            </h1>
            <p className="details">{cartList.length} Items in Cart</p>
          </div>
          {/*           
          <button type="button" className="checkout-btn">
            Checkout
          </button> */}

          <Popup
            trigger={
              <button type="button" className="button">
                Checkout
              </button>
            }
            modal
            nested
          >
            {close => (
              <div className="modal">
                <button type="button" className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">Payment Method</div>

                <div className="content">
                  <div className="inputContainer">
                    <input
                      type="radio"
                      name="payment"
                      value="UPI"
                      className="radioInput"
                      id="upiId"
                      disabled
                    />
                    <label htmlFor="upiId" className="label">
                      UPI
                    </label>
                  </div>
                  <div className="inputContainer">
                    <input
                      type="radio"
                      name="payment"
                      value="CARD"
                      className="radioInput"
                      id="cardId"
                      disabled
                    />
                    <label htmlFor="cardId" className="label">
                      Card
                    </label>
                  </div>
                  <div className="inputContainer">
                    <input
                      type="radio"
                      name="payment"
                      value="NET_BANKING"
                      className="radioInput"
                      id="netBankingId"
                      disabled
                    />
                    <label htmlFor="netBankingId" className="label">
                      Net Banking
                    </label>
                  </div>
                  <div className="inputContainer">
                    <input
                      type="radio"
                      name="payment"
                      value="WALLET"
                      className="radioInput"
                      id="walletId"
                      disabled
                    />
                    <label htmlFor="walletId" className="label">
                      Wallet
                    </label>
                  </div>
                  <div className="inputContainer">
                    <input
                      type="radio"
                      name="payment"
                      value="CASH_ON_DELIVERY"
                      className="radioInput"
                      id="cashDeliveryId"
                      onClick={onSelected}
                      checked={isSelected}
                    />
                    <label htmlFor="cashDeliveryId" className="label">
                      Cash on Delivery
                    </label>
                  </div>
                  <div className="AmountCont">
                    <div className="amtHead">
                      <p className="tHead">Number of Items</p>
                      <p className="tHead">Total Price</p>
                    </div>
                    <div className="amtHead">
                      <p className="tData">{cartList.length}</p>
                      <p className="tData">Rs {totalAmount} -/</p>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <Popup
                    trigger={
                      <button
                        type="button"
                        className={`button ${
                          isSelected ? null : 'disabledButton'
                        }`}
                        disabled={!isSelected}
                      >
                        Confirm Order
                      </button>
                    }
                    position="top center"
                    nested
                  >
                    <span className="placedOrder">
                      Your order has been placed successfully
                    </span>
                  </Popup>
                </div>
              </div>
            )}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
