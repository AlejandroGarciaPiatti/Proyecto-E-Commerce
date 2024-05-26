import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className={styles.miHeader}>
            <Link to="/" className={styles.titulo}>
                <h3>ZeroGames</h3>
            </Link>
            <div className={styles.Categories}>
                <NavLink to={"/category/PS5"} className={({isActive}) => isActive ? styles.ActiveOption : styles.Option}>PS5</NavLink>
                <NavLink to={"/category/Xbox"} className={({isActive}) => isActive ? styles.ActiveOption : styles.Option}>XBOX</NavLink>
                <NavLink to={"/category/PC"} className={({isActive}) => isActive ? styles.ActiveOption : styles.Option}>PC</NavLink>
                <NavLink to={"/category/Accesorios"} className={({isActive}) => isActive ? styles.ActiveOption : styles.Option}>ACCESORIOS</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
