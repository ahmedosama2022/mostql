import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProdect } from './Redux/ProddectSlicre';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from './Redux/CartSlice';
import { Col , Container, Row} from 'react-bootstrap';
import "./prodect.css"

const Home = () => {

const dispatch = useDispatch();
const prodect = useSelector((state) => state.prodect);
  
  useEffect(() => {
    dispatch(getProdect());
  }, []);
  useEffect(() => {
    console.log(prodect)
  }, [prodect])
  

  return (
    <div className='prodect container'>
       <Container>
          <Row>
         { prodect.data.map((prod) => ( 
           <Col md={12} sm={6} lg={6} xl={4} xxl={5}> 
       
                        <div className='pro'>
                        <Card key={prod.id} style={{ width: '300px' }}>
                          <Card.Img variant="top" src={prod.image}/>
                          <Card.Body>
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Text className='decs'>
                              {prod.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => dispatch(addToCart(prod))} >Add To Cart</Button>
                          </Card.Body>
                        </Card>
                        </div>
            </Col>
       
        ))
      }
    </Row>
       </Container>
    </div>
  )
}

export default Home
