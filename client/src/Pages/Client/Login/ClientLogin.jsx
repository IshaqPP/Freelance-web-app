import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import './ClientLogin.css'
import { Link } from "react-router-dom";
import axios from "axios";

function ClientLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/client/client-login', {
                email, password
            })
            localStorage.setItem("clientToken", JSON.stringify(response.data))
            window.location = '/'
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div className="form-container">
                <h1>Client Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Link to='/client-signup'>Don't have an Account..?</Link>
                </Form>
            </div>
        </Container>
    );
}
export default ClientLogin
