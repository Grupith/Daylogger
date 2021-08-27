import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../providers/UserProvider';
import { LogOut } from '../services/firebase';

const Dashboard = () => {
    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

    // useEffect(() => {
    //     if (!user) {
    //         setRedirect('/');
    //     } 
    // }, [user])

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <div>
            <h1>This is the Dashboard Page</h1>
            <button onClick={LogOut}>Logout</button>
        </div>
    )
}

export default Dashboard
