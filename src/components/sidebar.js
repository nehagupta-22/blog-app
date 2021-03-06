import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import {Navbar, Button, Nav, Container} from 'react-bootstrap';

const MySidebar = ({ children }) => {
   return (
     <>
     <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/" className = "Navbar-title">Moody Me</Navbar.Brand>
        <Nav className="me-auto">
           <Nav.Link href="/grumpy">grumpy me</Nav.Link>
           <Nav.Link href="/robust">robust me</Nav.Link>
           <Nav.Link href="/broody">broody me</Nav.Link>
           <Nav.Link href="/proliferous">proliferous me</Nav.Link>
        </Nav>
      </Container>
   </Navbar>
  </>
  )
}

export default MySidebar;
