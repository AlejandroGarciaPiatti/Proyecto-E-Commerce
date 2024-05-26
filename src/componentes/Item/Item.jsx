import styles from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({id, name, price, image, stock}) => {
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
                    Precio: ${price}
                </p>
                <p className={styles.Info}>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className={styles.ItemFooter}>
                <Link to={`/item/${id}`} className={styles.Option}>Ver detalle</Link>
            </footer>
        </article>

    )
}

export default Item
