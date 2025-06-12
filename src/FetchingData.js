import axios from "axios";

async function fetchAllProducts(setErrorMessage) {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        return response.data

    }
    catch (err) {
        setErrorMessage(err)
        return null
    }

}
async function fetchProductByID(setErrorMessage, id) {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response.data

    }
    catch (err) {
        setErrorMessage(err)
    }

}
export { fetchAllProducts, fetchProductByID }