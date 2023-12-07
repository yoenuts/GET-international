import React, {useEffect, useState, useContext} from "react";
import  { decodeToken } from "react-jwt"; 

const AuthContext = React.createContext();

//create a hook that would return useAuth each time the components are rendered
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(null);
    const [ userID , setUserID] = useState(null);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [admin, setAdmin] = useState(false);



    //a way to remember on refresh that is rerendering of components.
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsLoggedin(true);

            
            const initializeUser = async () => {
                //decode the token 
                const decodedToken = decodeToken(storedToken);
                
                //create callback to setUser details 
                await setUser({
                    id: decodedToken.data.user,
                    name: decodedToken.data.name,
                    role: decodedToken.data.role,
                });

                setUserID(decodedToken.data.user);

            };
    
            initializeUser();
        }
    }, []);


    useEffect(() => {
        if (user) {
            isAdmin();
        }
    }, [user]);
    
    //to ensure that admin state is preserved depending on the user

    const login = (token) => {
        setToken(token);
        localStorage.setItem('token', token);

        const decodedToken = decodeToken(token);

        setUser({
            id: decodedToken.data.user,
            name: decodedToken.data.name,
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
        userID,
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