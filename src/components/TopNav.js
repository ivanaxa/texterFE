import {Container, Navbar, Nav} from 'react-bootstrap';

function TopNav(){
    return(
      <Navbar bg="light" variant="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">Texter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/messages">Messages</Nav.Link>
            <Nav.Link href ="/login">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default TopNav