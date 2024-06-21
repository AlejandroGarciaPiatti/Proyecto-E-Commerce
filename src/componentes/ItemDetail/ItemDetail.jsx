import styles from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, name, price, category, image, stock, description}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

    const item={
        id,name,price,image
    }

    addItem(item, quantity)

    }


    return (
        <article className={styles.CardItem}>
            <header className={styles.Header}>
                <h2 className={styles.ItemHeader}>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name} className={styles.ItemImg}/>
            </picture>
            <section>
                <p className={styles.Info}>
                    Categoría: {category}
                </p>
                <p className={styles.Info}>
                    Descripcion: {description}
                </p>
                <p className={styles.Info}>
                    Precio: ${price}
                </p>            
            </section>
            <footer className={styles.ItemFooter}>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className={styles.Option}>Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd= {handleOnAdd}/>
                    )
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail