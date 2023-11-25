import React, { useEffect, useState } from "react";
import '../App.css';
import MemberForm from "../components/MemberForm";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";

function Archives() {
    const {isLoggedin, setIsLoggedIn} = useState(false);
	const { token, login, logout } = useAuth();

    /*
        cant use this cuz thisll render for each render of components
    useEffect(() => {
        if(isLoggedIn) {
            setShowForm(false);
        }
    }, [isLoggedIn]);
    */

    //when user logs in, handle these states
    const handleSubmit = (token) => {

        if(token) {
            //just to check lang
            login(token);

            setIsLoggedIn(true);


            //if user is logged in i need something constant for other pages to know that a user is logged in and
            //what their role is.
        } 
        else {

        }
        /*
        if(action == 'signup') {
            
        }
        */

    }

    return (
        <div className="archives">
            <h1>Archives page</h1>
            {showForm && (<MemberForm handleSubmit={handleSubmit} />)}

        </div>
    );
}

export default Archives;