import React, {useEffect, useState, useContext} from "react";
import  { decodeToken } from "react-jwt"; 

const AuthContext = React.createContext();

//create a hook that would return useAuth each time the components are rendered
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user,setUser] = useState(null);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [admin, setAdmin] = useState(false);



    //a way to remember on refresh that is rerendering of components.
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsLoggedin(true);
        }
    });

    //to ensure that admin state is preserved depending on the user

    useEffect(() => {
        if (user) {
            console.log(user.role);
            isAdmin();
        }
    }, [user]);

    const login = (token) => {
        setToken(token);
        localStorage.setItem('token', token);

        const decodedToken = decodeToken(token);

        setUser({
            id: decodedToken.data.userID,
            name: decodedToken.data.userName,
            role: decodedToken.data.role,
        })
        isAdmin();

        setIsLoggedin(true);
    }

    const logout = (e) => {
        setToken(null);
        localStorage.removeItem('token');
        setUser(null);
        setAdmin(false);
        setIsLoggedin(false);
    }


    const isAdmin = () => {
        if(user && user.role === 'admin') {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }

    const getUserId = () => {
        return user ? user.id : null;
    };

    const value = {
        token,
        user,
        getUserId,
        admin,
        isAdmin,
        isLoggedin,
        login,
        logout,
    }

    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )

}