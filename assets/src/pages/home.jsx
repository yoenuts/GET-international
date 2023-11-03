import React from "react";


class Home extends React.Component {
    render(){
        return(
            <div className="Home">
                <section className="home-top-div">
                    <div className="top-content">
                        <h2>Welcome to the Guild of Educators in TESOL International</h2>
                        <h3><i>Your gateway to endless opportunities</i></h3>
                        <div className="top-content-card">
                            <h6>
                                GUILD OF EDUCATORS IN TESOL INTERNATIONAL INSTITUTE is a progressive knowledge generating institution 
                                that is internationally -recognized for quality English language trainings, seminar, workshops, and conference.
                                It aims to provide relevant, quality, and accessible seminar; to deliver innovative, and interactive workshops, and, to produce highly competitive and functional trainings for teachers and other professions. 
                                GET International Research Journal aims to promote English language education to educators across all disciplines, to provide excellent training in language education through open learning, seminars and workshops, 
                                to enable the educators to be expert in the teaching of English to speakers of other languages and to be a leading center of excellence in the continuing professional 
                                development for teachers and other professions locally and internationally.
                            </h6>
                        </div>
                    </div>
                    <div className="d-lg-inline-flex flex-column">
                        <iframe 
                            className="youtube-video"
                            width="100%"
                            height="auto" 
                            src="https://www.youtube.com/embed/4jJVMXrOb14?si=ASM9HO8AVzT-f7JA" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                        >
                        </iframe>
                        <div>Some description here</div>
                    </div>
                </section>

                <section className="home-content">
                    <h2>stuff here</h2>
                    <p>The quick brown fox jumped over the lazy dog
                    </p>
                </section>

            </div>
        );
    }
}


export default Home;