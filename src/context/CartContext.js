import { createContext, useEffect, useState } from "react"

const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [CartContents, setCartContents] = useState([])

    useEffect(() => {
        const storedCart = localStorage.getItem("CartContents")
        if (storedCart) setCartContents(JSON.parse(storedCart))
    }, [])

    const addToCart = (product) => {
        const existingProductIndex = CartContents.findIndex(item => item.id === product.id)
        let updatedCart
        if (existingProductIndex === -1) {/*The product doesn't exist in the cart */
            updatedCart = [...CartContents, { ...product, quantity: 1 }];

        } else {/*The product  exists in the cart */
            updatedCart = CartContents.map((item, index) => {
                if (index === existingProductIndex) { return { ...item, quantity: item.quantity + 1 } }
                else { return item; }

            });


        }

        setCartContents(updatedCart)
        localStorage.setItem("CartContents", JSON.stringify(updatedCart))

    }

    const removeFromCart = (product_id) => {
        let updatedCart = []
        CartContents.forEach((item) => {
            if (item.id === product_id) {
                if (item.quantity > 1) {
                    item.quantity -= 1
                    updatedCart.push({ ...item, quantity: item.quantity })
                }/*if Item quantity = 1 just ignore it and it will not be pushed*/

            } else {
                updatedCart.push(item)
            }
        })


        setCartContents(updatedCart)
        localStorage.setItem("CartContents", JSON.stringify(updatedCart))

    }

    const clearCart = () => {
        setCartContents([])
        localStorage.setItem("CartContents", JSON.stringify([]))
    }

    return (
        <CartContext.Provider value={{ CartContents, addToCart, removeFromCart, clearCart }} >
            {children}
        </CartContext.Provider>
    )
}

export { CartContextProvider, CartContext }