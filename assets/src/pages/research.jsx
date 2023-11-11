import React from "react";

class Research extends React.Component {

    render(){
        return(
            <div className="Research">
                <div className="research-top-div">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <div className="title-header">
                                <h1>Welcome to the Guild of Educators in TESOL International</h1>
                                <h3><i>Your gateway to endless opportunities</i></h3>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="col d-flex ">
                                <img src="./img/GET-logo.png" alt="GET-logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Research;