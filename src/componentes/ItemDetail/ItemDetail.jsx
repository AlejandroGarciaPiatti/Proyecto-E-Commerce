import styles from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, price, category, image, stock, description}) => {

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
                <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail