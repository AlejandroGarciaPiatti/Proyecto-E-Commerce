import styles from "./Cart.module.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity() === 0) {
        return (    
            <div className={styles.Cart}>
                <h1>No hay items en el carrito</h1>
                <Link className={styles.Option} to='/'>Volver</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3 className={styles.Total}>Total: ${total()}</h3>
            <div className={styles.CartFooter}>
                <button onClick={() => clearCart()} className={styles.Button}>Vaciar carrito</button>
                <Link to='/checkout' className={styles.Option}>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart