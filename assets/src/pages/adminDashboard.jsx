import axios from "axios";



import React, {useState, useEffect} from "react";
import '../adminStyle.css';
import { Table } from 'reactstrap';
import { useAuth } from "../Context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import ArchiveForm from "../components/ArchiveForm";

function Admin () {
    const { token } = useAuth();
    const [articleData, setArticle] = useState([]);
    const [members, setMembers] = useState([]);
    const [archive, setArchive] = useState([]);
    const [showForm, setShowForm] = useState(false);


    const [articleID, setArticleID] = useState();

    const handleShowForm = (articleID) => {
        setArticleID(articleID);
        setShowForm(true);
    }


    useEffect (() => {
        fetchData('Articles');
        fetchData('Members');
        fetchData('Archives');
        
    }, []);


    const fetchData = async (endpoint) => {
        try {
            const response = await axios.get(`http://localhost:8080/TESOL/controller/${endpoint}.php`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            const { status, data } = response.data;
            if(status === 1) {
                if(endpoint === 'Articles') {
                    setArticle(data);
                }
                else if (endpoint === 'Members') {
                    setMembers(data);
                }
                else {
                    setArchive(data);
                    
                    
                }

            }
            else {
                console.log('no response: ', endpoint);
                console.log(response);
            }
            
        } catch(error) {
            console.log("Error fetching data: ", error);
        }
    }


    const deleteArticle = async (id) => {
        try {
            console.log(id);
            const response = await axios.delete(`http://localhost:8080/TESOL/controller/Articles.php`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                data:
                { 
                    articleID: id 
                },
                
            });
            console.log(response);
            const { status, message } = response.data;
            if(status === 1) {
                fetchData('Articles');
            }
            else {
                console.log('status not == 1');
            }


        } catch (error) {
            console.log("Error deleting data: ", error);
        }
    }

    const deleteMembers = async (id) => {
    
        try {
            const response = await axios.delete(`http://localhost:8080/TESOL/controller/Members.php`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                data: {
                    userID: id
                },
            });
            console.log('response here: ', response);
            //console.log(response.data.data);
            const { status, data } = response.data;
            if(status === 1) {
                console.log('deleted data');
                fetchData('Members');
            }
            else {
                console.log('no response: ');
            }


        } catch (error) {
            console.log("Error deleting data: ", error);
        }
    }

    const deleteArchive = async (id) => {
    
        try {
            const response = await axios.delete(`http://localhost:8080/TESOL/controller/Archives.php`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                data: {
                    archiveID: id
                }
            });
            //console.log(id);
            //console.log('response here: ', response);
            //console.log(response.data.data);
            const { status, data } = response.data;
            if(status === 1) {
                console.log('deleted data');
                fetchData('Archives'); 
            }


        } catch (error) {
            console.log("Error deleting data: ", error);
        }
    }




    return(
        <div className="Admin">
            <div className="row justify-content-center"> 
                <div className="main-panel">
                    <div className="col-md-12">
                        <div className="panel-header">
                            
                            
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
                                            Request ID
                                        </th>
                                        <th>
                                            User ID
                                        </th>
                                        <th>
                                            Title
                                        </th>
                                        <th>
                                            Organization
                                        </th>
                                        <th>
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {articleData.map((article,index) => (
                                        <tr key={index}>
                                            <th scope="row">{article.articleID}</th>
                                            <td>{article.userID}</td>
                                            <td>{article.title}</td>
                                            <td>{article.org}</td>
                                            
                                            <td>
                                                <button className="tableButton" type="button" onClick={() => handleShowForm(article.articleID)}>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </button>
                                                
                                                <button className="tableButton" type="button" onClick={() => deleteArticle(article.articleID)}>
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </button>

                                                {showForm && articleID === article.articleID && (<ArchiveForm setShowForm={setShowForm} articleID={articleID} />)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>                          

                    </div>
                    
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <div className="col-md-8">
                            <Table responsive>
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
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.map((member,index) => (
                                        <tr key={index}>
                                            <th scope="row">{member.userID}</th>
                                            <td>{member.userName}</td>
                                            <td>{member.email}</td>
                                            { member.userID !== 1 && 
                                                (
                                                    <td>
                                                        <button type="button" onClick={() => deleteMembers(member.userID)}>
                                                            <FontAwesomeIcon icon={faTrashCan} />
                                                        </button>
                                                    </td>
                                                )
                                            }
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
                                            Archive ID
                                        </th>
                                        <th>
                                            Title
                                        </th>
                                        <th>
                                            Volume
                                        </th>
                                        <th>
                                            Author
                                        </th>
                                        <th>
                                            Org
                                        </th>
                                        <th>
                                            Abstract
                                        </th>
                                        <th>
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {archive.map((archive,index) => (
                                        <tr key={index}>
                                            <th scope="row">{archive.archiveID}</th>
                                            <td>{archive.title}</td>
                                            <td>{archive.volume}</td>
                                            <td>{archive.author}</td>
                                            <td>{archive.org}</td>
                                            <td>{archive.abstract}</td>  

                                            <td>
                                                <button type="button" onClick={() => deleteArchive(archive.archiveID)}>
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </button>

                                                <button className="tableButton" type="button" >
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>

                                            </td>                                         
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