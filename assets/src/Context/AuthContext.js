import React, {useEffect, useState, useContext} from "react";
import  { decodeToken } from "react-jwt"; 

const AuthContext = React.createContext();

//create a hook that would return useAuth each time the components are rendered
export function useAuth(){
    return useContext(AuthContext);s
}

export function AuthProvider(props) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user,setUser] = useState(null);
    const [isLoggedin, setIsLoggedin] = useState(false);
    //decode the token here



    const login = (token) => {
        setToken(token);
        localStorage.setItem('token', token);

        const decodedToken = decodeToken(token);

        setUser({
            id: decodedToken.data.userID,
            name: decodedToken.data.userName,
            role: decodedToken.data.role,
        })

        setIsLoggedin(true);
    }

    const logout = (e) => {
        setToken(null);
        localStorage.removeItem('token');
        setUser(null);
        setIsLoggedin(false);
    }

    //a way to remember on refresh that is rerendering of components.
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsLoggedin(true);
        }
    });

    const value = {
        token,
        user,
        isLoggedin,
        login,
        logout,
    }

    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )

}