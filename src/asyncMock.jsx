const products = [
    {
        id: 1,
        name: "Mortal Kombat 11",
        price: 40,
        category: "PS5",
        image: "./MortalKombatPS5.webp",
        stock: 7,
        description: "PS5 Mortal Kombat 11 Edition"
    },

    {
        id: 2,  
        name: "Battlefield 2042",
        price: 60,
        category: "PS5",
        image: "./BF2042PS5.webp",
        stock: 9,
        description: "PS5 Battlefield 2042 Edition"
    },  

    {
        id: 3,  
        name: "The last of us",
        price: 50,
        category: "PS5",
        image: "./LastOfUsPS5.webp", 
        stock: 5,
        description: "PS5 The last of us Edition"
    },

    {
        id: 4,
        name: "Forza Horizon 5",
        price: 60,
        category: "Xbox",
        image: "./assets/images/ForzaHorizon5Xbox.webp",
        stock: 3,
        description: "Xbox Forza Horizon 5 Edition"
    },

    {
        id: 5,
        name: "Starfield",
        price: 40,
        category: "Xbox",
        image: "./assets/images/StarfieldXbox.webp",
        stock: 7,
        description: "Xbox Starfield Edition"
    },

    {
        id: 6,
        name: "Sea of Thieves",
        price: 50,
        category: "Xbox",
        image: "./assets/images/SeaOfThievesXbox.webp",
        stock: 9,
        description: "Xbox Sea of Thieves Edition"
    },

    {
        id: 7,
        name: "Cuphead",
        price: 40,
        category: "PC",
        image: "./assets/images/CupheadPC.webp",
        stock: 7,
        description: "PC Cuphead Edition"
    },

    {
        id: 8,
        name: "Grand Theft Auto V",
        price: 60,
        category: "PC",
        image: "./assets/images/GTA5PC.webp",
        stock: 9,
        description: "PC Grand Theft Auto V Edition"
    },

    {
        id: 9,
        name: "No man's sky",
        price: 50,
        category: "PC",
        image: "./assets/images/NMSPC.webp",
        stock: 5,
        description: "PC No man's sky Edition"
    },

    {
        id: 10,
        name: "Logitech G Series G435",
        price: 40,
        category: "Accesorios",
        image: "./assets/images/LogitechG435.webp",
        stock: 7,
        description: "Gaming Logitech G Series G435 Edition"
    },

    {
        id: 11,
        name: "Redragon Kumara K552",
        price: 60,
        category: "Accesorios",
        image: "./assets/images/RedragonK552.webp",
        stock: 9,
        description: "Gaming Redragon Kumara K552 Edition"
    },

    {
        id: 12,
        name: "Sony PlayStation DualSense CFI-ZCT1W Joystick inalámbrico midnight black",
        price: 50,
        category: "Accesorios",
        image: "./assets/images/PS5DualSense.webp",
        stock: 5,
        description: "Gaming Sony PlayStation DualSense CFI-ZCT1W Joystick inalámbrico midnight black Edition"
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}
