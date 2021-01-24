import {React,useState,useEffect } from 'react';
import {Navbar,Nav, Button} from 'react-bootstrap';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import img from './logo.png';
import { RiLoginBoxLine } from "react-icons/ri";
import {GoSignOut} from 'react-icons/go';
import {FaUserEdit} from 'react-icons/fa'

function NavBar({addition}){
    const [cookies, setCookie, removeCookie] = useCookies(["loggedIn"]);
    const history = useHistory();
    const [user,setUser] = useState('');
    
    useEffect(()=>{
        if(addition === 1 ){
            setUser('lawyer');
        }
        else if(addition === 2){
            setUser('police');
        }
    },[addition])

    const handleLogout = ()=>{
        removeCookie("loggedIn");
        setUser('');
        history.push("/");
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
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/lawTalk">LawTalk</Nav.Link>
                    <Nav.Link href="/complaint">Report complaint</Nav.Link>
                    {(user!='')?<Nav.Link href={"/"+user}>{user}</Nav.Link>:<></>}
                </Nav>
                <Nav>
                    <Button variant="outline-light" href="/Register">{'Register    '} <FaUserEdit/></Button>
                    {(user=='')?<Button variant="outline-light" href="/Login">{'Login    '} <RiLoginBoxLine/></Button>:<></>}
                    {(user!='')?<Button variant="outline-light" onClick={()=>handleLogout()}>{'Logout    '} <GoSignOut/></Button>:<></>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
