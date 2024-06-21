import cart from './assets/shopping-cart-outline-svgrepo-com(1).svg'
import styles from "./CartWidget.module.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    if(totalQuantity() === 0) {
        return null
    } else {
        return (
            <div className={styles.numero}>
                <Link to='/cart' className={styles.Link}>
                    <img src={cart} alt="cart-widget"/>
                    {totalQuantity()}
                </Link>
            </div>
        )
    }
}

export default CartWidget