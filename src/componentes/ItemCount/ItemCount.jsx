import styles from "./ItemCount.module.css"
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    if(stock === 0) {
        return (
            <div className={styles.Counter}>
               <div className={styles.Controls}>
                    <button className={styles.Button} onClick={decrement} disabled={!stock}>-</button>
                    <h4 className={styles.Number}>{0}</h4>
                    <button className={styles.Button} onClick={increment} disabled={!stock}>+</button>
                </div>
                <div>
                    <button className={styles.Button} onClick={() => onAdd(quantity)} disabled={!stock}>
                        Producto sin Stock
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.Counter}>
                <div className={styles.Controls}>
                    <button className={styles.Button} onClick={decrement}>-</button>
                    <h4 className={styles.Number} >{quantity}</h4>
                    <button className={styles.Button} onClick={increment}>+</button>
                </div>
                <div>
                    <button className={styles.Button} onClick={() => onAdd(quantity)}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        )
    }
          
}

export default ItemCount