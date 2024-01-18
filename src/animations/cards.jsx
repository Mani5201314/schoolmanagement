// src/components/Dashboard.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Cards = () => {
  return (
    <Container>
      <div>
      <h1 className=" float-start">Shool Updates</h1>
    <p className='text-end'>view all</p>
      </div><br/>
     <div className='mt-5'>
     <Row>
        <Col xs={4} >
          <Card className=' p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <Card.Title>
                <img src="/img/languages7.png" style={{width:"50px", backgroundColor:"#7dfb74"}} alt="" className='shadow-lg p-3 mb-5 rounded' />
              </Card.Title>
              <Card.Text>
                <h6>News </h6>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} >
          <Card className=' p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <Card.Title>
              <img src="/img/school9.png" style={{width:"50px" , backgroundColor:"hotpink"}} className='shadow-lg p-3 mb-5 rounded' alt="" />
              </Card.Title>
              <Card.Text> <h6>Events </h6></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} >
          <Card className=' p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <Card.Title>
              <img src="/img/maths8.png" style={{width:"50px" ,backgroundColor:"#7371ff"}} alt="" className='shadow-lg p-3 mb-5 rounded' />
              </Card.Title>
              <Card.Text> <h6>Buletin </h6></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
     </div>
    </Container>
  );
};

export default Cards;