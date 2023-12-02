import React, {useState, useEffect} from "react";
import '../adminStyle.css';
import { Table } from 'reactstrap';
import axios from "axios";
import { useAuth } from "../Context/AuthContext";

function Admin () {
    const { token } = useAuth();
    const [articleData, setArticle] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect (() => {
        fetchArticles();
        fetchMembers();
    }, []);

    const fetchArticles = async () => {

        try {
            const response = await axios.get("http://localhost:8080/TESOL/controller/Articles.php", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if(status === 1) {
                setArticle(data);
            }
            else {
                console.log('no response: ');
            }
            
        } catch(error) {
            console.log("Error fetching data: ", error);
        }
    }

    const fetchMembers = async () => {

        try {
            const response = await axios.get("http://localhost:8080/TESOL/controller/Members.php", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            console.log(response.data.data);
            const { status, data } = response.data;
            if(status === 1) {
                setMembers(data);
            }
            else {
                console.log('no response: ');
            }
            
        } catch(error) {
            console.log("Error fetching data: ", error);
        }
    }


    return(
        <div className="Admin">
            <div className="row justify-content-center"> 
                <div className="main-panel">
                    <div className="col-md-12">
                        <div className="panel-header">
                            hello???????
                            this is me this is real im exctly where im supposed to be
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="panel-cards">
                            <div className="row align-items-center justify-content-center" id='cardset'>
                                <div className="col-md-4" id="card">
                                    <h5>Pending Requests</h5>
                                    <p>
                                        By adding mx-auto to each column (col-xl-4, col-lg-6, etc.), you instruct Bootstrap to use automatic margins to center the columns horizontally within their parent container.<br></br>
                                        Additionally, if you want to vertically center the cards, you can use the align-items-center class on the row:
                                    </p>
                                </div>
                                <div className="col-md-4" id='card'>
                                    <h5> Archives </h5>
                                    <p>
                                        By adding mx-auto to each column (col-xl-4, col-lg-6, etc.), you instruct Bootstrap to use automatic margins to center the columns horizontally within their parent container.<br></br>
                                        Additionally, if you want to vertically center the cards, you can use the align-items-center class on the row:
                                    </p>
                                </div>
                                <div className="col-lg-12 col-md-4" id='card'>
                                    <h5>Members</h5>
                                    <p>
                                        By adding mx-auto to each column (col-xl-4, col-lg-6, etc.), you instruct Bootstrap to use automatic margins to center the columns horizontally within their parent container.<br></br>
                                        Additionally, if you want to vertically center the cards, you can use the align-items-center class on the row:
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <div className="col-md-8">
                            <Table responsive striped>
                                <thead>
                                    <tr>
                                        <th>
                                            User ID
                                        </th>
                                        <th>
                                            Title
                                        </th>
                                        <th>
                                            Institution
                                        </th>
                                        <th>
                                            Filepath/Filename
                                        </th>
                                        <th>
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {articleData.map((article,index) => (
                                        <tr key={index}>
                                            <th scope="row">{article.userID}</th>
                                            <td>{article.title}</td>
                                            <td>{article.org}</td>
                                            <td>{article.path}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>                          

                    </div>
                    
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <div className="col-md-8">
                            <Table responsive striped>
                                <thead>
                                    <tr>
                                        <th>
                                            User ID
                                        </th>
                                        <th>
                                            Username
                                        </th>
                                        <th>
                                            Email
                                        </th>
                                        <th>
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.map((members,index) => (
                                        <tr key={index}>
                                            <th scope="row">{members.userID}</th>
                                            <td>{members.userName}</td>
                                            <td>{members.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>                          

                    </div>

                    
                </div>
            
            </div>
        </div>
    );  
    
}

export default Admin;