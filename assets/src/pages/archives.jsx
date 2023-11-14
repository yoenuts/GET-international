import React, { useEffect, useState } from "react";
import '../App.css';
import LoginForm from "../components/LoginForm";

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
        console.log(action, inputs);
        setIsLoggedIn(true);
    }

    return (
        <div className="archives">
            <h1>Archives page</h1>
            {showForm && (<LoginForm handleSubmit={handleSubmit} />)}

        </div>
    );
}

export default Archives;