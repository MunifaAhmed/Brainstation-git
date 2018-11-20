import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';

const Hats= [
    {
        id: '0',
        title: 'JAMONT Hat',
        description:'Knit Beanie Skull Hat,caps Men,- Soft Fleece Lined Slouchy Winter Cap',
        price: '11.11',
        image:'/images/hat02.jpg'

    },
    {
        id: '1',
        title: 'C&C',
        description: 'Thick Cable Knit Faux Fuzzy Fur Pom Fleece Lined Skull Cap Cuff Beanie',
        price: '12.12',
        image: '/images/hat01.jpg'
    },
    {
        id: '2',
        title: 'PNG',
        description: 'Thick Cable Knit Faux Fuzzy Fur Pom Fleece Lined Skull Cap Cuff Beanie',
        price: '12.12',
        image: '/images/hat03.png'
    }
]
const Shoes= [
    {
        id: '1',
        title: 'Weweya',
        description:`Running Shoes Lightweight Breathable Casual Sports Shoes Fashion Sneakers Walking Shoes`,
        price: '88',
        image:'/images/shoes01.jpg'
    },
    {
        id: '2',
        title: 'POMT',
        description: 'POMT Men Casual Shoes Fashion Man Shoes Hombre Army Green Mens Shoes Casual Camouflage Footwear',
        price: '12.12',
        image:'/images/shoes02.jpg'
    },
    {
        id: '3',
        title: 'Channel',
        description: 'POMT Men Casual Shoes Fashion Man Shoes Hombre Army Green Mens Shoes Casual Camouflage Footwear',
        price: '12.12',
        image:'/images/shoes03.png'
    }
]

ReactDOM.render(
   <Router>
      <App  Hats={Hats} Shoes={Shoes}/>
   </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
