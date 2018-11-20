import React, { Component } from 'react';

class Shoes extends Component {

    render() {
      const shopList = this.props.shoes.map((shoe, i) => (
        <div>
          <div className='col'>
            <div className="card" style={{ "width": "18rem" }}>
              <img className="card-img-top" src={shoe.image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{shoe.title}</h5>
                <p className="card-text">{shoe.description}</p>
                <p>{shoe.price}</p>
                <button className="btn btn-primary" onClick={() => this.props.updateshoesCart(shoe.id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))
      return (
        <div>
          <h3>Shoes Collection</h3>
          <div className='container'>
            <div className='row'>
              {shopList}
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Shoes;
  