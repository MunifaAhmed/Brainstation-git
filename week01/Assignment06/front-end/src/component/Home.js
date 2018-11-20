import React, { Component } from 'react';

const Home = (props) => {
    return (
      <div id='home'>
        <h1>Hello! This is Beautiful Day to share your Name 😁 </h1>
        <form>
          <div>
            <input type='text' onChange={e => props.updateName(e.target.value)} name='name' />
            <button type='button' onClick={props.saveName} >Submit</button>
          </div>
        </form>
        <h3>Thank you {props.name}</h3>
      </div>
    )
  }

export default Home;