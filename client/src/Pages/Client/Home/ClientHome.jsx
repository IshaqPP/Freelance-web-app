import React, { useEffect, useState } from 'react'
import NavBar from '../../../Components/Client/NavBar'
import { Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function ClientHome() {
    const navigate = useNavigate()
    const [projects, setProjects] = useState([])
    useEffect(() => {
        const details = async () => {
            const response = await axios.get('http://localhost:5000/client')
            setProjects(response.data)
        }
        details()
    }, [])
    return (
        <>
            <NavBar />
            <div className="container d-flex justify-content-end mt-3">
                <Button className='w-auto' onClick={() => navigate('/new-project')}>Create New Project</Button>
            </div>
            {projects.length ? (
                <div className="container mt-3">
                    <div className="row">
                        {projects.map((project) => {
                            return (
                                <div key={project?._id} className="col-sm-6 col-lg-3 mb-3">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{project?.projectName}</Card.Title>
                                            <Card.Text>
                                                {project?.requirements}
                                            </Card.Text>
                                            {project?.freelancer ? (
                                                <Card.Text>
                                                    {project?.freelancer?.name} applied for this project
                                                </Card.Text>
                                            ) : (
                                                <Card.Text>
                                                    No one applied for this project
                                                </Card.Text>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <h1>No Project Posts...!</h1>
            )}
        </>
    )
}

export default ClientHome
