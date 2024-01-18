import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/home.css"
import Piechart from '../animations/pie1';
import Piechart2 from '../animations/pie2';
import ColumnChart from '../animations/column';
import Cards from '../animations/cards';
import { Link } from 'react-router-dom';
import Navbar1 from './navbottom';
const Home = () => {

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav href="#home"><div><Link id="space" to="/home">Home</Link></div>
                            </Nav>
                            <Nav href=""><div><Link id="space" to="/last">Assignment</Link></div></Nav>
                            <div><Link id="space" to="/homework">Homework</Link></div>
                            <Nav href="#Homework"></Nav>
                            <div><Link id="space" to="/payfee">Pay Fee</Link></div>
                            <Nav href="#payFee"></Nav>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>

                    <Navbar.Brand href="#home"><img src="/img/navman.jpg" width={50} id="navimg" alt="" /></Navbar.Brand>

                </Container>
            </Navbar>
            <div><h1 style={{ paddingLeft: 10 }}>Hello Maqsud !</h1></div>
            <div id="piechart">
                <div> <Piechart /></div>
                <div><Piechart2 /></div>
            </div><br />

            <ColumnChart />
            <br />
            <div id="piechart">
                <div> <h5>School Update</h5></div>
                <div>Views all</div>
            </div>
            <Cards />
           <div id="navhome"> <Navbar1 /></div>

        </div>
    )
}

export default Home;