import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function NavBar() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("clientToken")
        window.location.reload()
    }
    const token = localStorage.getItem("clientToken")
    return (
        <Navbar bg="secondary" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className='text-white'><b>Freelancing App (Client Mode)</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    {token ? (
                        <div className="d-flex">
                            <Button variant="danger" onClick={handleLogout}>LogOut</Button>
                        </div>
                    ) : (
                        <div className="d-flex">
                            <Button variant="primary" onClick={() => navigate('/client-login')}>LogIn</Button>
                        </div>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
