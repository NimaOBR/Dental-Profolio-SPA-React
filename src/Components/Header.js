import React, { Component } from "react";
// import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import "../App.css";
import dentist from "../dentist.mp4";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    // const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    return (
      <header id="home">
        {/* <ParticlesBg type="circle" bg={true} /> */}
        <video playsinline  src={dentist} className="video" muted loop autoPlay />

        <nav id="nav-wrap" style={{zIndex:'100'}}>
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "2.3rem",
                }}
              >
                {description}.
              </h3>
            </Fade>
            <hr style={{ fontSize: "10rem" }} />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a
                  href='#contact'
                  className="button btn project-btn smoothscroll"
                >
                <i class="fa fa-phone"></i>let's Talk
                </a>
                <a href={github} target="_blank" className="button btn github-btn">
                  <i className="fa fa-map-marker"></i>Get Directions
                </a>
                <p style={{color:'#000',fontSize:'1.8rem'}}>Tel : 020-8731-8611 -   Mobile : 07775-882818</p>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
