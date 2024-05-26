import styles from "./ItemDetailContainer.module.css"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(Number(itemId))
            .then(response => {
                setProduct(response)
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (    
        <div className={styles.ItemDetailContainer}>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer