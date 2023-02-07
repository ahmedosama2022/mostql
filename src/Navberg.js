import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  useSelector } from 'react-redux';
import {MdShoppingBasket} from "react-icons/md"
import { Link } from 'react-router-dom';
import "./Navber.css"
const Navberg = () => {
  const cart = useSelector(state => state.cart);
  return (
    <div className='nav'>
       <Navbar  expand="lg">
      <Container>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5rzFVmcxUhqYW7HwseWx8ZLuJ2hCVh3wqg&usqp=CAU' style={{height:"90px"}}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"20px"}}>
          <Nav className="me-auto">
            <Link to="/" style={{marginLeft:"20px"}}><a>SHOP</a></Link>
            
            <Link to="/" style={{marginLeft:"20px"}}><a>ABOUT</a></Link>

            <Link to="/Cart" className='shopping' style={{marginLeft:"20px", position:"relative", left:"400px"}}><MdShoppingBasket/>{cart.length}</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navberg
