import './App.css';
import { Outlet,Link } from 'react-router-dom';
import React,{Component} from 'react';
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
class App extends Component {
  render(){
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand>ANZ CSP Verification Tool</Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link as={Link} to='/releases'>Releases</Nav.Link>
              <Nav.Link as={Link} to='/platforms'>Platforms</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
        <Outlet></Outlet>
      </div>
    );
  }
}

export default App;