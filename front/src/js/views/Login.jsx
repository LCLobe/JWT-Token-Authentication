import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import useAppContext from '../context/Context.js';
import LoginForm from '../components/LoginForm.jsx';

const Login = () => {

    const {store} = useAppContext();
    const {userIsLoggedIn} = store;

    const navigate = useNavigate();

    useEffect(() => {
        if (userIsLoggedIn) {
            navigate('/Dashboard');
        }
    }, [userIsLoggedIn]);

    return <>
    <LoginForm />
    </>;
}

export default Login;