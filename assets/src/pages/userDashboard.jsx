import React from "react";
import ArticleForm from "../components/ArticleForm";

class UserPage extends React.Component {

    render(){
        return(
            <div className="UserDashboard">
                <ArticleForm />
            </div>
        );
    }
}

export default UserPage;