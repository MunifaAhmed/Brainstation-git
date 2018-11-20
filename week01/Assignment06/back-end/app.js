const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())


let shoppingCart =  []

app.post('/pushcart', (req, res ) => {
    shoppingCart = req.body
    res.json({ shoppingCart })
    })
    
app.get('/getcart', (req, res)=>{
    res.json({ shoppingCart } )

    })



app.listen('8080', ()=> {
  console.log('started server')
})

