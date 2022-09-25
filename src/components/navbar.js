import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PageNavbar() {
  return (
    <Navbar bg="white" expand="lg" >
      <Container fluid >
        <Navbar.Brand href="#"><img src='/images/skidos-logo.png' height={"60px"} alt ='logo' ></img></Navbar.Brand>
        <Nav className="me-auto">
            Announcements
        </Nav>
        <Form className="d-flex">
          <Button variant="primary">Log in</Button>
          </Form>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
