import CartWidget from "../CartWidget/CartWidget"
import "../../App.css"

const NavBar = () => {
    return (
        <nav>
            <h3>ZeroGames</h3>
            <div className="secciones">
                <button>PS5</button>
                <button>XBOX</button>
                <button>PC</button>
                <button>Accesorios</button>
            </div>
            <CartWidget className="widget"/>
        </nav>
    )
}

export default NavBar