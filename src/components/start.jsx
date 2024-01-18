import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/start.css"
import { Navigate,useNavigate } from 'react-router-dom';

const Start = () => {
    
    let navigate = useNavigate()

    const submit1 = (e) => {
      navigate('/home')
  };

  return (
    <div>
        <center>
      <Card id='cardstart' style={{ width: '20rem' , marginTop:"50px"}}>
      <img src="/img/homeimg.png" alt="" />
        < form onSubmit={submit1}>       
      <Card.Body>
        <Card.Title className='text-black'>Educating for complexity</Card.Title>
        <Card.Text id="font">
            instant Accurate Communication between school management,staff,parents and students with the Student Alert portal and app
        </Card.Text>
        <Button type="submit" id="btnstart">Get Started</Button>
      </Card.Body>
      </form>
    </Card>
    </center>
    </div>
  )
}

export default Start;