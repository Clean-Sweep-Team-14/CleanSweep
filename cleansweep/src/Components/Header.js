import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

export default function Header(props) {
    return (
        <Navbar bg="primary" variant="primary">
        <Container>
            <Navbar.Brand href="#home"><strong>CleanSweep</strong></Navbar.Brand>
            <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            <LinkContainer to="/Dashboard">
                <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Chores">
                <Nav.Link>Chores</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile-page">
                <Nav.Link>My Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Friends">
                <Nav.Link>Friends</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/leaderboards">
                <Nav.Link>Leaderboards</Nav.Link>
            </LinkContainer>
            </Nav>
        </Container>
        </Navbar>
    );
}