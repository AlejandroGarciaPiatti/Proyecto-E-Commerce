import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.css"
import { useParams } from "react-router-dom"
import {getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc =>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(Error => {
                console.log(Error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }
    
    return (
        <div className={styles.ItemListContainer}>
            <h1 className={styles.saludo}>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer

