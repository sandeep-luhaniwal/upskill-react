import React, { useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [valueChange, setValueChange] = useState(false);
    return (
        <UserContext.Provider value={{ cart, setCart, total, setTotal, valueChange, setValueChange }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
