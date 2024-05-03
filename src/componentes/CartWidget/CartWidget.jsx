import cart from './assets/shopping-cart-outline-svgrepo-com(1).svg'
import styles from "./CartWidget.module.css"

const CartWidget = () => {
    return (
        <div className={styles.numero}>
            <img src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget