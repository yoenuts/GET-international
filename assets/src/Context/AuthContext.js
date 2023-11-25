import React, {useEffect, useState, useContext} from "react";
import jwt from 'jsonwebtoken';

const AuthContext = React.createContext();

//create a hook that would return useAuth each time the components are rendered
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user,setUser] = useState(null);
    //decode the token here



    const login = (token) => {
        setToken(token);
        localStorage.setItem('token', token);

        const decodedToken = jwt.decode(token);
        setUser({
            id: decodedToken.data.userID,
            name: decodedToken.data.userName,
            role: decodedToken.data.role,
        })
    }

    const logout = (token) => {
        setToken(null);
        localStorage.setItem(null);
        setUser(null);
    }

    const value = {
        token,
        user,
        login,
        logout,
    }

    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )

}