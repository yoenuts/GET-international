import React, { useEffect, useState } from "react";
import '../App.css';
import MemberForm from "../components/MemberForm";
import axios from "axios";

function Archives() {
    const [showForm, setShowForm] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(isLoggedIn) {
            setShowForm(false);
        }
    }, [isLoggedIn]);

    //when user logs in, handle these states
    const handleSubmit = (action, inputs) => {

        if(action == 'login') {
            setIsLoggedIn(true);
            //just to check lang
            console.log("User is logged in!");

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