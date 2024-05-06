import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"

const NavBar = () => {
    return (
        <nav className={styles.miHeader}>
            <h3 className={styles.titulo}>ZeroGames</h3>
            <div className={styles.secciones}>
                <button className={styles.boton}>PS5</button>
                <button className={styles.boton}>XBOX</button>
                <button className={styles.boton}>PC</button>
                <button className={styles.boton}>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
