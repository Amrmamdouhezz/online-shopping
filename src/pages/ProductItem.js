import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { fetchProductByID } from "../FetchingData"
import { ErrorContext } from '../context/ErrorContextProvider'

const ProductItem = () => {
    const { id } = useParams()
    const [productItem, setProductItem] = useState({})
    const { setErrorMessage, errorMessage } = useContext(ErrorContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetchProductByID(setErrorMessage, id).then(data => {
            if (data) {
                setProductItem(data)
            }
            setLoading(false)
        })


    }, [id, setErrorMessage])
    if (loading) return <Loading />
    return (
        <div>
            {!errorMessage && (productItem ?
                <div className='singleProduct' >
                    <img src={productItem.image} alt='productItem'></img>
                    <h2 className="card-title">{productItem.title}</h2>
                    <p className='card-price'><span className='fw-bolder text-black'>Price: </span>{productItem.price}$</p>
                    <p className='card-category'><span className='fw-bolder text-black'>Category: </span>{productItem.category}$</p>
                    <p className='card-description'>{productItem.description}</p>
                </div> : <Loading />)}
        </div>


    )
}

export default ProductItem