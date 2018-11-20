import React, { Component } from 'react';

class Hats extends Component {

    render() {
      const shopList = this.props.hats.map((hat, i) => (
        <div>
          <div className='col'>
            <div className="card" style={{ "width": "18rem" }}>
              <img className="card-img-top" src={hat.image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{hat.title}</h5>
                <p className="card-text">{hat.description}</p>
                <p>{hat.price}</p>
                <button className="btn btn-primary" type='button' onClick={() => this.props.updatehatsCart(hat.id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))
      return (
        <div>
          <h3>Hats Collection</h3>
          <div className='container' style={{ "margin": "20px" }}>
            <div className='row'>
              {shopList}
            </div>
          </div>
        </div>
      );
    }
  }
 
export default Hats;