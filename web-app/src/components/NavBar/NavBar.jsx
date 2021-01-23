import React from 'react';
import {Navbar,Nav, Button} from 'react-bootstrap';
import img from './logo.png';
import { RiLoginBoxLine } from "react-icons/ri";

function NavBar({addition}){
    var user = '';
    if(addition === 1 ){
        user = 'lawyer';
    }
    else if(addition === 2){
        user = 'police';
    }
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
                    <Nav.Link href="/complaint">Home</Nav.Link>
                    <Nav.Link href="/lawTalk">LawTalk</Nav.Link>
                    <Nav.Link href="/EmergencyNumbers">Report complaint</Nav.Link>
                    {(user!='')?<Nav.Link href={"/"+user}>{user}</Nav.Link>:<></>}
                </Nav>
                <Nav>
                    <Button variant="outline-light" href="/Login">{'Login    '} <RiLoginBoxLine/></Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;