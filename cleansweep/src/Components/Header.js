import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import useAuth from "../hooks/useAuth";

export default function Header(props) {
  const { user, loggedOut } = useAuth();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">CleanSweep</Navbar.Brand>
        <Nav className="me-auto">
          <LinkContainer to="/Chores">
            <Nav.Link>Available Chores</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/MyChores">
            <Nav.Link>My Chores</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/leaderboards">
            <Nav.Link>Leaderboard</Nav.Link>
          </LinkContainer>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          {" "}
          {user ? (
            <button onClick={loggedOut}>Logout</button>
          ) : (
            <Nav>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
