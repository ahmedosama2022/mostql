import React, { useState }  from 'react'
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { ImTwitter } from 'react-icons/im';
import Home from './Home'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className='hh'>
       <div className='topp'>
       <div className='top'>
              <h1>Psgstudy.Com</h1>
        </div>
        <div className='two'>
            <BsFacebook className="icon"/>
            <ImTwitter className="icon"/>
          
          <BsInstagram className="icon"/>
           
        </div>
       
       </div>

       <div className='sec2'>
       <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <h class="navbar__brand" href="#"><div className='nnna'>
      <FaGraduationCap className='inn'/>
      <h3>PSG</h3>
      <h5>STUDY</h5>
      </div></h>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " id='hhh' aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">
PARTNERS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">CONTACT US</a>
        </li>
      </ul>
      <form class="d-flex">
       
        <button class="bn " type="submit">APPLY Now</button>
      </form>
    </div>
  </div>
</nav>
       </div>
       
    </div>
    <Home/>
    </div>
  )
}

export default App