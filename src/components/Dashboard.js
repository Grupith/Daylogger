import React, { useState, useEffect, useContext, } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
// import Form from './Form';
// import { LogOut } from '../services/firebase';

const Dashboard = () => {
    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

    // If a user is not logged in, kick them back to the login page
    useEffect(() => {
        if (!user) {
            setRedirect('/');
        } 
    }, [user])

    if (redirect) {
        return <Redirect to={redirect} />
    }
    return (
        <div>
            <h1 className='title'>Day<span className='titleSpan'>Logger</span></h1>
            <h2 className='subTitle'>Write a journal prompt each day.</h2>
            <button className='add'>Add</button>
        </div>
    )
}

export default Dashboard