import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

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
            <LinkContainer to="/Cart">
                <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
            </Nav>
        </Container>
        </Navbar>
    );
}