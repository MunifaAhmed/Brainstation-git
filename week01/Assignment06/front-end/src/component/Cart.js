import React, { Component } from 'react';

// const Cart = (props) => {
class Cart extends Component {
  render(){
    return (
      <div>
        <h3>Cart List</h3>
        <div className='container'>
          <div className='row'>
            {this.props.cartList}
          </div>
        </div>
      </div>
    )
  
  }
}

export default Cart;