import styles from "./CartItem.module.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ id, name, image, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (
        <div className={styles.CartItem}>
            <img src={image} alt={name} className={styles.ItemImg}/>
            <h3>{name}</h3>
            <h3>{quantity}</h3>
            <h3>${price}</h3>
            <button onClick={handleRemove} className={styles.Button}>Eliminar</button>
        </div>
    )
}

export default CartItem
