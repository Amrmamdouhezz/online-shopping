import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
function BasicExample() {
    const { CartContents } = useContext(CartContext)
    const totalCartLength = CartContents.reduce((length, item) => length + item.quantity, 0)
    return (

        <Nav className='navBar'>
            <div>
                <Nav.Item>
                    <Nav.Link className='toHover' as={Link} to='/'>Home</Nav.Link>
                </Nav.Item>
            </div>
            <div className='d-flex justify-content-between'>
                <Nav.Item className='d-flex justify-content-between'>
                    <Nav.Link className='toHover' as={Link} to='/Login'>Login</Nav.Link>
                    <Nav.Link className='toHover position-relative' as={Link} to='/Cart'>
                        Cart<i className="fa-solid fa-cart-shopping"></i>
                        {
                            CartContents.length > 0 && <span className='cart-number'>{totalCartLength}</span>
                        }
                    </Nav.Link>
                </Nav.Item>
            </div>
        </Nav>


    );
}

export default BasicExample;