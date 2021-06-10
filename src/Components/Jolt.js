import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Jolt extends Component {
  render() {
    if (!this.props.data) return null;
    const type = this.props.data.type;
    const joltLogo = "images/" + this.props.data.image;
    const writeup = this.props.data.writeup;
    const presentation = this.props.data.presentation;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const image = () => (<div className="three columns">
        <img
          className="profile-pic"
          src={joltLogo}
          alt="Rodney Matambo Profile Picture"
        />
      </div>)
    return (
      <header id="jolt">
        <ParticlesBg type={type} bg={true} />

        <nav id="nav-wrap">
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
                Previous Projects
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
            <Fade bottom duration={1200}>
              {image()}
            </Fade>
            {name && <Fade bottom>
              <h3 className="responsive-headline">{name}</h3>
            </Fade>}
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={writeup} className="button btn project-btn">
                  <i className="fa fa-book"></i>Jolt Technical Case Study
                </a>
                <a href={presentation} className="button btn github-btn">
                  <i className="fa fa-desktop"></i>Presentation 
                </a>
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

export default Jolt;
