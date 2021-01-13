import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import img from './logo.png';
import { FaUser } from "react-icons/fa";
function NavBar(){
    return (
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top" fixed='top'>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={img}
                    width="150"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#law_talk">LawTalk</Nav.Link>
                    <Nav.Link href="#report_complaint">Report complaint</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#sign_in">Sign-in {'  '} <FaUser/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;