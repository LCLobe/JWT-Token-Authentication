import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../context/Context.js';

const CreateUserForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const navigate = useNavigate();
    const {actions } = useAppContext();
    const {handleCreateUser} = actions;

    const localHandleCreateUser = () => {
        //Add your code here
        //Need to add back end to create user
    };
    return (
    <div>
        <div className="container mt-5 mb-3">
            <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h4 className="text-center">Crear usuario</h4>
                    </div>
                    <div className="card-body">
                        <form>
                        <div className="form-group">
                            <label for="username">Nombre de usuario:</label>
                            <input type="text" className="form-control mb-3" id="username" placeholder="Introduce tu nombre de usuario" value={username} onChange={handleUsernameChange}/>
                        </div>
                        <div className="form-group">
                            <label for="password">Contraseña:</label>
                            <input type="password" className="form-control  mb-3" id="password" placeholder="Introduce tu contraseña" value={password} onChange={handlePasswordChange}/>
                        </div>
                        <div className="form-group">
                            <label for="email">Correo electrónico:</label>
                            <input type="email" className="form-control  mb-3" id="email" placeholder="Introduce tu correo electrónico" value={email} onChange={handleEmailChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={localHandleCreateUser}>Crear usuario</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>);
}

export default CreateUserForm;