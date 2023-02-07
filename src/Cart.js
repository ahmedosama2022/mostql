import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'react-bootstrap/Image';
import {  removeProdect } from './Redux/CartSlice';
import  {deleteAllProdect} from "./Redux/CartSlice"

import './App.css'

const Cart = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const counter = useSelector(state => state.counter)
  
  

  const calcolat = cart.reduce((acc, current) => {
    acc += current.price;
    return acc;
  }, 0)
     
  
  return (
    <Container>
     <div className='cartts'>
     <h1>MyBRODECT</h1>
      <Button variant="danger" onClick={() => dispatch(deleteAllProdect())}>Delete</Button>
      <div className='totelprice'><h4>Total Price : {calcolat.toFixed()} $</h4></div>
     </div>
          {
            cart.map((prodec) => (
              <Table striped bordered hover >
              <thead>
                <tr>
                  <th></th>
                  <th> Title</th>
                  <th>price</th>
                  <th>Image</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                <th>{prodec.id}</th>
                  
                  <th>{prodec.title}</th>
                  <th>{prodec.price} $</th>
                  <th><Image src={prodec.image} style={{width: "100px", height:"100px" }}/></th>
                  <th><Button variant="primary" onClick={() => dispatch (removeProdect(prodec))}>Delete</Button></th>
                  <th><Button  variant="success">+</Button>
                  <p>1</p>
                  <Button variant="warning" >-</Button></th>
                </tr>
              </tbody>
            </Table>
            ))
          }
        </Container>
  )
}

export default Cart
