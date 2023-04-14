import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import NavBar from '../../../Components/Freelancer/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FreelancerHome() {
    const navigate = useNavigate()
    const [projects, setProjects] = useState([])
    const freelancer = JSON.parse(localStorage.getItem("freelancerToken"));
    const details = async () => {
        const response = await axios.get('http://localhost:5000/freelancer/freelancer-home')
        setProjects(response.data)
    }
    const handleApply = async (id) => {
        if (freelancer) {
            await axios.put(`http://localhost:5000/freelancer/freelancer-apply?id=${id}`, freelancer)
            details()
        } else {
            navigate('/freelancer-login')
        }
    }

    useEffect(() => {
        details()
    }, [])
    return (
        <>
            <NavBar />
            <div className="container mt-3">
                <Row>
                    {projects.map((project) => {
                        return (
                            <Col key={project?._id} sm={12} md={6} lg={3} className='mb-3'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{project?.projectName}</Card.Title>
                                        <Card.Text>
                                            {project?.requirements}
                                        </Card.Text>
                                        {project?.applied === false ? (
                                            <Button variant="primary" onClick={() => handleApply(project?._id)}>Apply</Button>
                                        ) : (
                                            <h4>Applied</h4>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}

export default FreelancerHome
