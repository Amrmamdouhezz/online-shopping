import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { fetchAllProducts } from "../FetchingData"
import { ErrorContext } from '../context/ErrorContextProvider';
const MainContent = () => {
    const [products, setProducts] = useState([])
    const { addToCart } = useContext(CartContext)
    const { setErrorMessage } = useContext(ErrorContext)

    useEffect(() => {
        fetchAllProducts(setErrorMessage).then(data => {
            if (data) setProducts(data);
        }

        )
    })
    return (
        <div className='d-flex flex-column justify-content-around  align-items-center gap-5 flex-wrap mt-3 p-5'>
            <h2>Explore All the products</h2>
            <div className='d-flex flex-wrap justify-content-around'>
                {
                    products.length > 0 ?
                        products.map((product) => (
                            <div key={product.id}>

                                <Card className='card'>
                                    <Card.Img className="card-image" variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title className="card-title">{product.title}</Card.Title>
                                        <Card.Text className='card-price fw-bold'>{product.price}$</Card.Text>
                                        <Card.Text className='card-category'><span className='fw-bold'>Category: </span><span style={{ color: "#2b2d42" }}>{product.category}$</span></Card.Text>
                                        <div className='Buttons d-flex justify-content-between'>
                                            <Button className='cart-button' onClick={() => addToCart(product)} variant="primary">Add to Cart</Button>
                                            <Button className='product-details-button' as={Link} to={`ProductItem/${product.id}`} variant="primary">Details</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>

                        ))

                        : <Loading />
                }
            </div>

        </div >


    )
}

export default MainContent