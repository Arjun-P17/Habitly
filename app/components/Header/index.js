import React from "react";
import styles from "./Header.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
            <Container className="mx-3">
                <Navbar.Brand href="/">Habitly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link href="/Water">Water</Nav.Link>
                        <Nav.Link href="#Meals">Meals</Nav.Link>
                        <Nav.Link href="/Exercise">Exercise</Nav.Link>
                        <Nav.Link href="#Reading">Reading</Nav.Link>
                        <Nav.Link href="#Entertainment">Entertainment</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
