import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import ClientSignup from './Pages/Client/Signup/ClientSignup';
import ClientLogin from './Pages/Client/Login/ClientLogin';
import ClientHome from './Pages/Client/Home/ClientHome';
import CreateForm from './Pages/Client/Form/CreateForm';
import FreelancerSignup from './Pages/Freelancer/Signup/FreelancerSignup';
import FreelancerLogin from './Pages/Freelancer/Login/FreelancerLogin';
import FreelancerHome from './Pages/Freelancer/Home/FreelancerHome';

function App() {
  const client = JSON.parse(localStorage.getItem("clientToken"));
  const freelancer = JSON.parse(localStorage.getItem("freelancerToken"));
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<ClientHome />} />
        <Route path="/freelancer-home" exact element={<FreelancerHome />} />
        {client && <Route path="/client-signup" exact element={<Navigate replace to='/' />} />}
        {client && <Route path="/client-login" exact element={<Navigate replace to='/' />} />}
        {client && <Route path="/new-project" exact element={<CreateForm />} />}
        <Route path="/client-signup" exact element={<ClientSignup />} />
        <Route path="/client-login" exact element={<ClientLogin />} />
        <Route path="/new-project" exact element={<ClientLogin />} />
        {freelancer && <Route path="/freelancer-signup" exact element={<Navigate replace to='/freelancer-home' />} />}
        {freelancer && <Route path="/freelancer-login" exact element={<Navigate replace to='/freelancer-home' />} />}
        <Route path="/freelancer-signup" exact element={<FreelancerSignup />} />
        <Route path="/freelancer-login" exact element={<FreelancerLogin />} />
      </Routes>
    </div>
  );
}

export default App;
