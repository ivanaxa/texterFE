import {Container, Navbar, Nav} from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

function TopNav(){
    return(
      <Navbar bg="light" variant="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">Texter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/messages">Messages</Nav.Link>
            <Nav.Link href ="/login">Sign In</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default TopNav