import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationBar() {
    return (
        <Navbar>
            <Navbar.Brand href="#home">CleanSweep</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#chores">Chores</Nav.Link>
            <Nav.Link href="#myprofile">My Profile</Nav.Link>
            <Nav.Link href="#friends">Friends</Nav.Link>
            <Nav.Link href="#leaderboards">Leaderboards</Nav.Link>
            <Nav.Link className="text-end" href="#logout">
                Logout
            </Nav.Link>
            </Nav>
        </Navbar>
    );
}
