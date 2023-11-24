import React, {useEffect, useState, useContext} from "react";


const AuthContext = React.createContext();

//create a hook that would return useAuth each time the components are rendered
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);


    const login = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logout = (token) => {
        setToken(null);
        localStorage.setItem(null);
    }

    const value = {
        token,
        setToken,
        login,
        logout,
    }

    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )

}