import React, { useEffect, useState } from "react";
import '../App.css';
import MemberForm from "../components/MemberForm";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";

function Archives() {
	const { login, logout, isLoggedin } = useAuth();

    /*
        cant use this cuz thisll render for each render of components
    useEffect(() => {
        if(isLoggedIn) {
            setShowForm(false);
        }
    }, [isLoggedIn]);
    */
    const handleSubmit = (token) => {
		login(token)
		setShowForm(false);
		/*
		if(login(token)) {
			


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
            {!isLoggedin ? <MemberForm handleSubmit={handleSubmit} /> : null}

        </div>
    );
}

export default Archives;