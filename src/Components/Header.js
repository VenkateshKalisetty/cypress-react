import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function HeaderComponent() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Redux Example</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/counter">
            <Nav.Link>Counter</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/users">
            <Nav.Link>Users</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </>
  )
}