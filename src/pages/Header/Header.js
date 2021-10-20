import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const {user,logout} = useAuth();
    return (
            <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand href="#home"><span className="text-danger">HOMEMEDICAL</span></Navbar.Brand>

                <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/service">Service</Nav.Link>
                        <Nav.Link as={Link} to="/doctor">Doctor</Nav.Link>
                        <Nav.Link as={Link} to="/contuct">Contuct Us</Nav.Link>
                        {user?.email?
                            <Button onClick={logout} variant="success">Logout</Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                            
                        
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </>

    );
};

export default Header;