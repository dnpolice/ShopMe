import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
    const purchaseArray = [{
        name: 'Mocha Ice Cream',
        description: 'Freshly made mocha icecream specially stored to keep it extremly fresh',
        cost: 9.99,
        quantity: 1
    },
    {
        name: 'Mocha Ice Cream',
        description: 'Freshly made mocha icecream specially stored to keep it extremly fresh',
        cost: 9.99,
        quantity: 1
    },
    {
        name: 'Mocha Ice Cream',
        description: 'Freshly made mocha icecream specially stored to keep it extremly fresh',
        cost: 9.99,
        quantity: 1
    }]
    return (
            <div>
            <Navbar/>
            <div className="cart">
                <table className="table">
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {purchaseArray.map(item => (<tr>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.cost}</td>
                    </tr>))}
                    <tr>
                        <th style={{"background-color": "white"}}></th>
                        <th></th>
                        <th>100</th>
                    </tr>
                    </table>
                    <button id="purchase"><h2>Purchase</h2></button>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
