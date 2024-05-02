import cart from './assets/shopping-cart-outline-svgrepo-com(1).svg'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} id="widgetIcon" alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget