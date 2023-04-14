import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import './FreelancerSignup.css'
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

function FreelancerSignup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/freelancer/freelancer-signup', {
                username, email, password
            })
            localStorage.setItem("freelancerToken", JSON.stringify(response.data))
            navigate('/freelancer-login')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div className="form-container">
                <h1>Freelancer Sign Up</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
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
                        Sign Up
                    </Button>
                    <Link to='/freelancer-login'>Already have an Account..?</Link>
                </Form>
            </div>
        </Container>
    );
}
export default FreelancerSignup
