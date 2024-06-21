import { useState } from "react";
import styles from "./CheckoutForm.module.css"


const CheckoutForm = ({onConfirm}) => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")


    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name,
            phone,
            email
        }

        onConfirm(userData)
    }
    

    return (
        <div className={styles.Container}>

            <form onSubmit={handleConfirm} className={styles.Form}>
                <label className={styles.Label}>
                    Nombre
                    <input
                        type="text"
                        value={name}
                        onChange={({target}) => setName(target.value)}
                        className={styles.Input}  
                    />
                </label>
                <label className={styles.Label}>
                    Telefono
                    <input
                        type="text"
                        value={phone}
                        onChange={({target}) => setPhone(target.value)}
                        className={styles.Input}  
                    />
                </label>
                <label className={styles.Label}>
                    Email
                    <input
                        type="text"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                        className={styles.Input}  
                    />
                </label>
                <div className={styles.Label}>
                    <button type="submit" className={styles.Button}>Crear Orden</button>
                </div>
            </form>

        </div>
    )
    
}

export default CheckoutForm

    
