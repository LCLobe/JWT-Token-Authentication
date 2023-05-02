import React from 'react';

const CreateUserForm = () => {
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
                            <input type="text" className="form-control mb-3" id="username" placeholder="Introduce tu nombre de usuario"/>
                        </div>
                        <div className="form-group">
                            <label for="password">Contraseña:</label>
                            <input type="password" className="form-control  mb-3" id="password" placeholder="Introduce tu contraseña"/>
                        </div>
                        <div className="form-group">
                            <label for="email">Correo electrónico:</label>
                            <input type="email" className="form-control  mb-3" id="email" placeholder="Introduce tu correo electrónico"/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Crear usuario</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>);
}

export default CreateUserForm;