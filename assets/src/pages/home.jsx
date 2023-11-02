import React from "react";


class Home extends React.Component {
    render(){
        return(
            <div className="Home">
                <div className="home-top-div">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/4jJVMXrOb14?si=ASM9HO8AVzT-f7JA" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                    >
                    </iframe>
                </div>
            </div>
        );
    }
}


export default Home;