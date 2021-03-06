import React, { useState, useEffect, createContext} from 'react';
import { auth } from '../services/firebase';
export const UserContext = createContext({user: null});

const SetUserContext = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged( async (user) => {
            if (user) {
                const { displayName, email } = user;
                setUser({
                    displayName,
                    email
                })
            } else {
                setUser(null);
            }
        })
    }, [])
    return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
}

export default SetUserContext;