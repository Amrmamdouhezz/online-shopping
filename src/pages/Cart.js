import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { ErrorContext } from '../context/ErrorContextProvider'

const Cart = () => {
    const { CartContents, removeFromCart, clearCart } = useContext(CartContext)
    const totalPrice = CartContents.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const totalCartLength = CartContents.reduce((length, item) => length + item.quantity, 0)
    const { errorMessage } = useContext(ErrorContext)
    return (
        <div>
            {
                !errorMessage && (<div className='d-flex flex-column justify-content-around align-items-center'>
                    <div className='Cart'>
                        <h1>Cart items</h1>
                        <div className='d-flex flex-column justify-content-between align-items-center'>
                            {
                                CartContents.length > 0 ? (
                                    CartContents.map((item) => (
                                        <div key={item.id} className='CartItem'>
                                            <img alt='img' src={item.image} />
                                            <div className='Cart-item-info'>
                                                <p className='category'>{item.category}</p>
                                                <p className='title'>{item.title}</p>
                                                <p className='quantity'><span className='quantity-title'> Quantity : </span>{item.quantity}</p>
                                            </div>
                                            <div className='price'>{item.price * item.quantity}$</div>
                                            <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
                                        </div>
                                    ))
                                ) : (
                                    <p className='mt-5'>Your cart is empty</p>
                                )
                            }
                        </div>
                        {
                            CartContents.length > 0 && (
                                <div className='cart-page-buttons'>
                                    <Button className='button' onClick={clearCart}>Clear Cart</Button>
                                    <Button className='button' as={Link} to="/"  >Add more items</Button>
                                </div>
                            )
                        }
                    </div>
                    <div className='price-total-div'>
                        <p className='cart-total-price-title'>Price Total ({totalCartLength} items): <span className='cart-total-price'>
                            {totalPrice.toFixed(2)} $
                        </span> </p>
                    </div>


                </div >)
            }
        </div>

    )
}

export default Cart