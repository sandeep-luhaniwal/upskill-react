import React, { useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    return (
        <UserContext.Provider value={{ cart, setCart, total, setTotal }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
