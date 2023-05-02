import React, { useState } from 'react';
import useAppContext from '../context/Context.js';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {actions } = useAppContext();
  const {handleLogin} = actions;
 
  const navigate = useNavigate();

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Aquí podrías enviar los datos a un servidor o hacer alguna otra cosa con ellos
    console.log('Username:', username);
    console.log('Password:', password);
    handleLogin(username, password, navigate);
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form className="p-4" onSubmit={handleSubmit}>
          <h2 className="mb-3">Log in</h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit" className="btn btn-primary">Log in</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default LoginForm;