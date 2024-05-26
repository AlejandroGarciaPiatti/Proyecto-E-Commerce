import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.css"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncfunc = categoryId ? getProductsByCategory : getProducts

        asyncfunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])
    
    return (
        <div>
            <h1 className={styles.saludo}>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer

