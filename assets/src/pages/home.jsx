import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "../components/carouselImages";

class Home extends React.Component {
    //check if component mounted on DOM, then target class nd execute the function import on it.

    componentDidMount() {
        $('.mCustomScrollbar').mCustomScrollbar({
            theme: 'light-thin'
        });

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin: 0,
            responsiveClass:true,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            dots:false,
            nav: false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                    
                },
                1000:{
                    items:3,
                    loop:true
                }
            }
        });
    }

    
    render(){

        
        const images = [
            "./img/carouselItem1.png",
            "./img/carouselItem2.png",
            "./img/carouselItem3.png",
            "./img/carouselItem4.png",
            "./img/carouselItem5.png",
            "./img/carouselItem6.png"
        ]
        


        return(
            <div className="Home">
                <section className="home-top-div">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <div className="title-header">
                                <h1>Welcome to the Guild of Educators in TESOL International</h1>
                                <h3><i>Your gateway to endless opportunities</i></h3>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="col d-flex ">
                                <iframe  
                                    className="youtube-video"
                                    src="https://www.youtube.com/embed/4jJVMXrOb14?si=ASM9HO8AVzT-f7JA" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="home-content-1">
                    
                    <div className="row">
                        
                        <div className="col-md-8">
                            <div className="col d-flex align-items-center">
                                    <div className="description">
                                        <h5> 
                                            GUILD OF EDUCATORS IN TESOL INTERNATIONAL INSTITUTE is a progressive knowledge generating institution that is internationally 
                                            -recognized for quality English language trainings, seminar, workshops, and conference. It aims to provide relevant, quality, 
                                            and accessible seminar; to deliver innovative, and interactive workshops, and, to produce highly competitive and functional trainings 
                                            for teachers and other professions.
                                        </h5>
                                    </div>
                            </div>
                            
                            <div className="col d-flex align-items-center">
                                <Carousel images={images} />
                            </div>

                            <div className="col d-flex align-items-center">
                                <div className="description">
                                    <h5> 
                                        GET International Research Journal aims to promote English language education to educators across 
                                        all disciplines, to provide excellent training in language education through open learning, seminars and workshops, to enable the educators
                                        to be expert in the teaching of English to speakers of other languages and to be a leading center of excellence in the continuing professional 
                                        development for teachers and other professions locally and internationally.
                                    </h5>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-md-4">
                            
                            <div className="right-child">
                                <div className="row">

                                    <div className = "col-md-12">
                                        <div className="child-title">
                                            <h2>Is Tesol Program For You?</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mCustomScrollbar" id="card-1">
                                            <h5>Integrating TESOL with other subjects and disciplines can create meaningful and engaging learning experiences for English language learners. 
                                                Here are some examples of how TESOL can be integrated with various subjects:  </h5>
                                            <ul className="card-content">
                                                <li>
                                                    <strong>Math:</strong> TESOL can support English language learners in developing math language proficiency by providing language support and 
                                                    vocabulary instruction specific to mathematical concepts. Teachers can incorporate math word problems, discussions, 
                                                    and activities that promote language use and comprehension within mathematical contexts. 
                                                </li> 
                                                <li>
                                                    <strong>Science:</strong>  TESOL integration in science education involves teaching English language learners the language and 
                                                    vocabulary necessary to understand scientific concepts. Teachers can provide language scaffolding, visual aids, and hands-on experiments to 
                                                    facilitate comprehension and promote language development within science lessons.      
                                                </li> 
                                                <li>
                                                    <strong>Physical Education (PE): </strong> TESOL integration in PE involves using English language instruction during physical activities and sports. Teachers can incorporate vocabulary 
                                                    related to body parts, sports equipment, and movement verbs. Additionally, they can encourage English language learners to communicate and collaborate in English during team games and exercises.  
                                                </li> 
                                                <li>
                                                    <strong>Social Studies:</strong> TESOL integration in social studies helps English language learners understand historical events, cultural practices, 
                                                    and social systems. Teachers can provide language support to facilitate reading, writing, and discussion of social studies content. They can also incorporate interactive activities such as debates, role-plays, and projects that require English language use within social studies contexts
                                                </li> 
                                                <li>
                                                    <strong>Religion:</strong> TESOL integration in religious studies involves supporting English language learners in understanding religious texts, rituals, and concepts. Teachers can focus on vocabulary related to religious practices and beliefs, 
                                                    and incorporate reading, writing, and discussion activities that promote language acquisition while exploring religious themes.  
                                                </li> 
                                                <li>
                                                    <strong>Music:</strong> TESOL integration in music education involves using English language instruction during music lessons, singing, and instrument playing. Teachers can introduce English vocabulary related to music, use English song 
                                                    lyrics for language practice, and encourage English language learners to express themselves through music in English.  
                                                </li>
                                                <li>
                                                    <strong>Information Technology (IT):</strong> TESOL integration in IT education involves teaching English language learners the language and vocabulary necessary for using technology and engaging with digital resources. Teachers can incorporate language-focused activities, 
                                                    such as writing emails, creating presentations, and researching in English, within IT lessons.   
                                                </li> 
                                                <li>
                                                    <strong>Values Education:</strong> TESOL integration in values education focuses on teaching English language learners language skills and vocabulary related to moral values, ethics, and character development. Teachers can incorporate discussions, role-plays, 
                                                    and reflective writing activities that promote English language use while exploring values and ethical dilemmas.   
                                                </li> 
                                                <br></br>
                                                <li>
                                                Integrating TESOL with these subjects not only enhances English language proficiency but also facilitates the acquisition of content knowledge and skills. It provides English language learners with opportunities to apply their language skills in meaningful contexts, 
                                                fostering their overall academic development and engagement.
                                                </li>
                                            </ul>
                                        </div>      

                                        
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mCustomScrollbar" id="card-2">
                                            <h5>When we consider TESOL from an interdisciplinary perspective, it means examining the field in connection with other disciplines and exploring the intersections and interconnections between them. TESOL can intersect with other disciplines in an interdisciplinary manner: </h5>
                                            <ul className="card-content">
                                                <li>
                                                    <strong>Anthropology</strong> TESOL professionals can draw on anthropological perspectives to understand the cultural dimensions of language and communication. 
                                                    This interdisciplinary approach helps teachers better comprehend the cultural backgrounds, beliefs, and practices of their students, 
                                                    facilitating effective cross-cultural communication in the language classroom.  
                                                </li> 
                                                <li>
                                                    <strong>Sociology:</strong>  Sociology provides insights into social structures, institutions, and dynamics. Applying sociological perspectives to 
                                                    TESOL allows educators to explore how language learning and teaching are influenced by social factors such as social class, gender, ethnicity, 
                                                    and power relationships within the classroom and broader society.     
                                                </li> 
                                                <li>
                                                    <strong>Neuroscience:</strong> Understanding the cognitive processes involved in language learning can benefit from insights from neuroscience. 
                                                    Interdisciplinary research in TESOL and neuroscience can shed light on how the brain acquires, processes, and retains language, 
                                                    leading to more effective teaching strategies and materials.   
                                                </li> 
                                                <li>
                                                    <strong>Global Studies/International Relations:</strong> TESOL has strong ties to global studies and international relations due to the nature of 
                                                    language learning and the increasing global demand for English. An interdisciplinary approach with these fields allows educators to explore the 
                                                    global spread of English, language policies, and the impact of English language proficiency on individuals, communities, and international interactions. 
                                                </li> 
                                                <li>
                                                    <strong>Education Policy and Administration:</strong> TESOL intersects with education policy and administration as it involves decision-making processes, 
                                                    curriculum development, and assessment practices. Understanding the policies and administrative frameworks that influence language education can inform 
                                                    TESOL professionals in creating effective programs and advocating for the needs of English language learners.  
                                                </li> 
                                                <br></br>
                                                <li>
                                                    By engaging in interdisciplinary approaches, TESOL professionals can gain a broader perspective on language teaching and learning, incorporating insights 
                                                    and methodologies from diverse fields. This enables them to address the complex and interconnected aspects of language education, resulting in more comprehensive 
                                                    and impactful teaching practices.
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mCustomScrollbar" id="card-3"> 
                                            <h5>Teaching English to Speakers of Other Languages (TESOL) is a field that can be approached from a multi-disciplinary or interdisciplinary perspective. Here’s how TESOL can intersect with various disciplines </h5>
                                            <ul className="card-content">
                                                <li>
                                                    <strong>Linguistics:</strong> Linguistics forms the foundation of TESOL. 
                                                    It helps teachers understand the structure, grammar, syntax, phonetics, and phonology of the English language, 
                                                    enabling them to effectively teach these aspects to non-native speakers.  
                                                </li> 
                                                <li>    
                                                    <strong>Second Language Acquisition (SLA):</strong>  SLA research draws from disciplines such as psychology, 
                                                    cognitive science, and sociolinguistics. Understanding how second languages are acquired helps TESOL professionals 
                                                    design effective teaching strategies and create supportive learning environments.    
                                                </li> 
                                                <li>
                                                    <strong>Pedagogy:</strong> TESOL incorporates teaching methodologies and principles from the field of education. 
                                                    Educators adapt and apply theories of learning, instructional design, assessment, and classroom management to the 
                                                    specific context of teaching English as a second or foreign language.   
                                                </li> 
                                                <li>
                                                    <strong>Cultural Studies:</strong> Language is deeply intertwined with culture, and TESOL acknowledges the importance 
                                                    of cultural awareness and sensitivity. Incorporating elements of cultural studies helps teachers promote intercultural 
                                                    understanding, respect, and effective communication among students from diverse backgrounds.  
                                                </li> 
                                                <li>
                                                    <strong>Technology and Digital Tools:</strong> With the increasing integration of technology in education, 
                                                    TESOL professionals often incorporate digital tools, online platforms, and language learning apps into their teaching practices. 
                                                    This requires familiarity with educational technology, computer-assisted language learning, and digital literacy. 
                                                </li> 
                                                <li>
                                                    <strong>Sociolinguistics:</strong> TESOL teachers often encounter learners from various social, cultural, and linguistic backgrounds. 
                                                    Sociolinguistics provides insights into language variation, dialects, sociocultural norms, and the impact of social factors on language use. 
                                                    This knowledge helps teachers accommodate diverse linguistic backgrounds and develop inclusive teaching approaches.
                                                </li>
                                                <li>
                                                    <strong>Psychology and Applied Linguistics:</strong> Understanding the cognitive processes involved in language learning, motivation, 
                                                    and learner psychology is crucial for effective TESOL instruction. Applied linguistics research, which combines elements of linguistics, 
                                                    psychology, and education, explores language-related phenomena in real-world contexts and informs TESOL practices.  
                                                </li> 
                                                <li>
                                                    By integrating knowledge and insights from these different disciplines, TESOL professionals can create a comprehensive and holistic approach to teaching 
                                                    English to non-native speakers, catering to their linguistic, cultural, psychological, and educational needs. This multi-disciplinary or interdisciplinary 
                                                    approach helps ensure a well-rounded and effective learning experience for English language learners.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    
                </section>
                <section>
                    <div className="home-content-2">hello hi</div>
                </section>

            </div>
        );
    }
}


export default Home;