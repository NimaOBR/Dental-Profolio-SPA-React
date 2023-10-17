import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree}
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
          <em className="date">{work.years}</em>
            {work.title}
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {

      return (
        <li key={skills.name}>
          <em>{skills.name}</em>
         <p className='skills-p'> &bull; {skills.level}</p>
        </li>
        
      );
    });
    const fq = this.props.data.FQ.map((Question) => {

      return (
        <li >
          <b style={{fontSize:'19px',color:'#313131'}}>{Question.question}</b>
         <p className='qustion-p'> &bull; {Question.title}</p>
        </li>
        
      );
    })

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className=" columns header-col">
              <h1>
                <span>SERVICES </span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p style={{fontSize:'18px',color:'#0762F9'}}>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
            
          </div>
        </Slide>
        <hr style={{width:'70%',margin:'auto'}}></hr>
        <Slide left duration={1300}>
          <div className="row Question">
            <div className=" columns header-col">
              <h1>
                <span>Display their FAQS</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p style={{fontSize:'18px',color:'#0762F9'}}>Question</p>

              <div className="barsQuestion">
                <ul className="Question2">{fq}</ul>
              </div>
            </div>
            
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
