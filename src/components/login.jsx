import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/login.css"
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e) => {
        navigate('/start')
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card" id="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Login Page</h2>
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password:
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
