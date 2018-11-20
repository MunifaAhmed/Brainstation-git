import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Cart from './Cart'
import Hats from './Hats';
import Shoes from './Shoes';


class Shops extends Component {
    state = {
      hats: this.props.hats,
      shoes: this.props.shoes,
      cartList: []
    }
  
    componentDidMount() {
      axios
        .get('http://localhost:8080/getcart')
        .then(({ data }) => {
          console.log(data)
          this.setState({
            cartList: data.shoppingCart.cartList || this.state.cartList
          })
        })
    }
  
    updatehatsCart = (id) => {
      let cartItem = this.props.hats.find((item, i) => {
        return item.id === id
      })
      this.setState({
        cartList: this.state.cartList.concat(
          {
            title: cartItem.title,
            description: cartItem.description,
            price: cartItem.price,
            image: cartItem.image
          })
      }, () => {
        axios
          .post('http://localhost:8080/pushcart', {
            cartList: this.state.cartList
          })
          .then(res => console.log(res))
  
      })
    }
    updateshoesCart = (id) => {
      let cartItem = this.props.shoes.find((item, i) => {
        return item.id === id
      })
      this.setState({
        cartList: this.state.cartList.concat(
          {
            title: cartItem.title,
            description: cartItem.description,
            price: cartItem.price,
            image: cartItem.image
          })
      }, () => {
        axios
          .post('http://localhost:8080/pushcart', {
            cartList: this.state.cartList
          })
          .then(res => console.log(res))
      })
    }
    render() {
      const cartList = this.state.cartList.map((cart, i) => (
        <div>
          <div className='col'>
            <div className="card" style={{ "width": "18rem" }}>
              <img className="card-img-top" src={cart.image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{cart.title}</h5>
                <p className="card-text">{cart.description}</p>
                <p>{cart.price}</p>
                
              </div>
            </div>
          </div>
        </div>
      ))
      return (
        <div>
          <div className="transbox">
            <p id='name'>Welcome {this.props.name}</p>
          </div>
          <h1>Shops Collection</h1>
          <div id='shopnav'>
          <Link to='/shops/hats'>Hats</Link>|||
          <Link to='/shops/shoes'>Shoes</Link>
          </div>
          <Switch>
            <Route path='/shops/hats' render={() => <Hats hats={this.props.hats} updatehatsCart={this.updatehatsCart} />} />
            <Route path='/shops/shoes' render={() => <Shoes shoes={this.props.shoes} updateshoesCart={this.updateshoesCart} />} />
          </Switch>
          <Cart cartList={cartList} />
        </div>
      )
    }
  }

export default Shops;