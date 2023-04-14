import React, { useState } from 'react'
import './CreateForm.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateForm() {
  const [projectName, setProjectName] = useState('');
  const [requirements, setRequirements] = useState('');
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/client/new-project', {
        projectName, requirements
      })
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Project Name :</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter your project name"
          required
        />
        <label htmlFor="requirements">Requirements :</label>
        <textarea
          id="requirements"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Enter your requirements"
          required
        ></textarea>
        <button type="submit" className='mt-3'>Submit</button>
      </form>
    </div>
  )
}

export default CreateForm
