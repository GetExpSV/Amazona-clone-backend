import express from 'express';
import data from './data';
const app = express();

app.get('/api/products', (req,res)=>{
    res.send(data.products)
});

app.listen(3005, ()=>{console.log('Server started att http//localhost:3005')});