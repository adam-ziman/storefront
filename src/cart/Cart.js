import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
	constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <div className='Cart'>
                Cart
            </div>
        );
    }
}

export default Cart;
