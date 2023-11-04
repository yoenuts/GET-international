import React, { Component } from "react";
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'malihu-custom-scrollbar-plugin';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';


class Home extends React.Component {
    //check if component mounted on DOM, then target class nd execute the function import on it.
    componentDidMount() {
        $('.mCustomScrollbar').mCustomScrollbar({
            theme: 'dark-thin'
        });
    }

    render(){
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
                            <div className="col mt-4">
                                <iframe 
                                    className="youtube-video"
                                    src="https://www.youtube.com/embed/4jJVMXrOb14?si=ASM9HO8AVzT-f7JA" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                >
                                </iframe>
                                <div>Some description here</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home-content-1">
                    <h2>Is TESOL Program for You?</h2>
                    <div className="row">

                        <div className="col d-flex">
                                
                            <div className="mCustomScrollbar">
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

                        <div className="col d-flex">
                                
                            <div className="mCustomScrollbar">
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
                                    <li>
                                        By engaging in interdisciplinary approaches, TESOL professionals can gain a broader perspective on language teaching and learning, incorporating insights 
                                        and methodologies from diverse fields. This enables them to address the complex and interconnected aspects of language education, resulting in more comprehensive 
                                        and impactful teaching practices.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col d-flex">
                                
                            <div className="mCustomScrollbar">
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
                </section>
                <section>
                    <div className="home-content-2">hello hi</div>
                </section>

            </div>
        );
    }
}


export default Home;