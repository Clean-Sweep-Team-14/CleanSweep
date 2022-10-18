import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import useAuth from "../hooks/useAuth";
import { logout } from "../Endpoints";

export default function Header(props) {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">CleanSweep</Navbar.Brand>
            <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/leaderboards">
                <Nav.Link>Leaderboards</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Chores">
                <Nav.Link>Chores</Nav.Link>
            </LinkContainer>
            
            </Nav>
        </Container>
        </Navbar>
    );
}
  const { user } = useAuth();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">CleanSweep</Navbar.Brand>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/leaderboards">
            <Nav.Link>Leaderboards</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Chores">
            <Nav.Link>Chores</Nav.Link>
          </LinkContainer>
          
          {/* {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <div>
              <button>Login</button>
              <button>Signup</button>
            </div>
          )} */}
        </Nav>
      </Container>
    </Navbar>
  );

