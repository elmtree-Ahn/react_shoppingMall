/* eslint-disable*/

import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data.js';
import Item from './component/Item';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './component/Detail';

function App() {

  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoe Master</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Route exact path="/">
        <div className="jumbotron">
          <h1>Shoes these days.</h1>
          <span>20% discount on all items to celebrate September.<br/>
          2,000 won discount coupon for new members.</span>
          <Button variant="primary">Primary</Button>{' '}
        </div>
        <div className="container">
          <div className="row">
            {
              shoes.map((a, i) => {
                return <Item shoes={shoes[i]} number={i} key={i}/>
              })
              
            }
          </div>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes={shoes}/>
      </Route>



    </div>
  );
}

export default App;
