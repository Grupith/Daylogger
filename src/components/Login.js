import React, { useState, useEffect, useContext } from 'react'
import { SignInWithGoogle } from '../services/firebase';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        if (user) {
            setRedirect('/dashboard');
        }
    }, [user])

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <div>
            <h2>This is the Login Page</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <button onClick={SignInWithGoogle}>Login</button>
            </form>
        </div>
    )
}

export default Login
