import React from 'react';
import '../research.css';

function EditorialBoard() {

    const editorialBoardMembers = [
        {
          row: 1,
          elements: [
            {
              imgSrc: "/img/Editorial-Board/ps.png",
              name: "Percival Salise, EdD",
              school: "PAGCOR",
            },
            {
              imgSrc: "/img/Editorial-Board/jln.png",
              name: "Jayrome L. Nuñez, EdD(cand.)",
              school: "Tafe Arabia Higher Education, Saudi Arabia"
            },
            {
              imgSrc: "/img/Editorial-Board/ess.png",
              name: "Evangelina S. Seril, DEM",
              school: "Polytechnic University of the Philippines"
            }
          ]
        },
        {
          row: 2,
          elements: [
            {
              imgSrc: "/img/Editorial-Board/rjs.png",
              name: "Rosemarie Jean E. Smith, DVM",
              school: "TESDA, Guiguinto Bulacan"
            },
            {
              imgSrc: "/img/Editorial-Board/mph.png",
              name: "Mahalia Paz O. Ho, JD",
              school: "DepEd – Capiz National High School (SHS)"
            },
            {
              imgSrc: "/img/Editorial-Board/ad.png",
              name: "Alesa Durgaryan, ESL/EFL/ESP, Trainer PhD",
              school: "KhachaturAbovian Armenian State Pedagogical University",
            }
          ]
        },
        {
          row: 3,
          elements: [
            {
              imgSrc: "/img/Editorial-Board/smg.png",
              name: "Susana M. Galvez, PhD",
              school: "Bulacan State University",
            },
            {
              imgSrc: "/img/Editorial-Board/dm.png",
              name: "Dr.Muthmainnah,S.PdI.,MPd",
              school: "Universitas Al Asyariah Mandar"
            },
            {
              imgSrc: "/img/Editorial-Board/wha.png",
              name: "Welma H. Alisasis,EdD",
              school: "DepEd NCR Region"
            }
          ]
        },
        {
          row: 4,
          elements: [
            {
              imgSrc: "/img/Editorial-Board/apc.png",
              name: "Arlon Ponce Cadiz, PhD",
              school: "DepEd Regional Office III"
            },
            {
              imgSrc: "/img/Editorial-Board/htab.png",
              name: "Hazhar Talaat Abubaker Blbas",
              school: "Salahaddin University"
            },
            {
              imgSrc: "/img/Editorial-Board/ys.png",
              name: "Yosra Sellami, PhD",
              school: "University of Sfax, Sfax City"
            }
          ]
        },
        {
          row: 5,
          elements: [
            {
              imgSrc: "/img/Editorial-Board/ded.png",
              name: "Daniel Edwards",
              school: "St. Patrick School – Quezon City"
            },
            {
              imgSrc: "/img/Editorial-Board/mla.png",
              name: "Mayette L. Aromin, EdD",
              school: "Lyceum of the Philippines University"
            },
            {
              imgSrc: "/img/Editorial-Board/mcy.png",
              name: "Maria Cecilia C. Ycong, PhD",
              school: "Trinity University of Asia"
            }
          ]
        },
        {
          row: 6,
          elements: [
            {
              imgSrc: "/img/Editorial-Board/elio.png",
              name: "Eda Lou Ibasco Ochangco, PhD",
              school: "Far Eastern University"
            },
            {
              imgSrc: "/img/Editorial-Board/mlaj.png",
              name: "Mark LewisMontano L. Agudilla Jr., PhD",
              school: "DepEd",
            },
            {
              imgSrc: "/img/Editorial-Board/dbb.png",
              name: "Dondon B. Buensuceso, PhD",
              school: "Don Bosco Technical Institute-Makati City"
            }
          ]
        }
      ];


    return(
        <div className="col-md-8 about-container">

            <div className="row d-flex" style={{marginRight: '20px'}}>
                <div className="row">
                    <div className="col d-flex align-items-center mt-5">
                        <h3 className="pl-5">
                            <span className="aboutJournal-title">
                                Editorial Board
                            </span>
                        </h3>
                        <hr class="title-rule"></hr>
                    </div>

                    <div className="editorial-board-container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center mt-5">
                                <div className="row">
                                    <img src="/img/Editorial-Board/llm.png" alt="Editor-in-Chief" />
                                </div>
                                <div className='row'>
                                    <h6>Leovigildo Lito D. Mallillin, PhD</h6>
                                    <h6>Editor-in-Chief</h6>
                                    <p style={{textAlign: 'center'}}>Far Eastern University</p>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center mt-5">
                                <div className="row">
                                  <img src="/img/Editorial-Board/lpg.png" alt="Editor-in-Chief" />
                                </div>
                                <div className='row'>
                                  <h6>Louie P. Gula</h6>
                                  <h6>Managing-Editor</h6>
                                  <p style={{textAlign: 'center'}}>Visayas State University</p>
                                </div>
                            </div>

                        </div>

                        <div className="col d-flex align-items-center mt-5">
                          <h5 style={{fontFamily: "Budmo W00 Solid", color: '#21409a'}}>Peer Reviewers</h5>
                          <hr class="hr-rule" style={{flexGrow: '0.5'}}></hr>
                        </div>

                        {editorialBoardMembers.map((row, rowIndex) => (
                            <div className="row" key={rowIndex}>
                            {row.elements.map((member, memberIndex) => (
                                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center mt-5" key={memberIndex}>
                                    <div className="row">
                                      <img src={member.imgSrc} alt={`Editor ${memberIndex + 1}`} />
                                    </div>
                                    <div className="row">
                                      <h6 style={{paddingTop: '10px'}}>{member.name}</h6>
                                      <p style={{textAlign: 'center', paddingBottom: '2px'}}>{member.school}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                        ))}
                        
                    </div>
                </div>


            </div>


        </div>

    );
}

export default EditorialBoard;