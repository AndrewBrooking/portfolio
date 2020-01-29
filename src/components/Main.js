import PropTypes from 'prop-types';
import React from 'react';
import Article from './Article.js';
import Stepper from'./Stepper.js';
import me from '../images/me.jpg';

class Main extends React.Component {

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <Article id="about" title="About" article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}>
          <div style={{display: "flex", justifyContent: "space-between"}}>
              <img src={me} alt="Andrew Brooking" style={{
                width: "30%",
                height: "28%",
                borderRadius: "50%",
                marginRight: "2rem",
                marginTop: "auto",
                marginBottom: "auto"
              }} />
              <p style={{width: "70%"}}>
                Hello! I am Andrew Brooking, a Full-Stack Developer, with a passion for creating new and interesting applications.
                My experience with front-end and back-end technologies as well as my technical support background provide me with a unique perspective of application development.
                My ability to create attractive interfaces and successfully troubleshoot bugs stem from my methodical and detail-oriented design process.
              </p>
            </div>
        </Article>

        <Article id="work" title="Work" article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}>
          {/* TODO */}
          <Stepper />
        </Article>

        <Article id="skills" title="Skills" article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}>
          <ul
            style={{
              columnCount: "4",
              columnRule: "dotted 1px #333",
              listStyleType: "none"
            }}
          >
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Java</li>
            <li>Python</li>
            <li>C++</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>MVC</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>GatsbyJS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>GraphQL</li>
            <li>OOP Design</li>
            <li>jQuery</li>
            <li>Git</li>
            <li>RESTful APIs</li>
            <li>JSON</li>
            <li>Material UI</li>
            <li>Bootstrap</li>
          </ul>
        </Article>

        <Article id="contact" title="Contact" article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/andrew-brooking-856393185/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AndrewBrooking"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:andrew.brooking@gmail.com"
                className="icon fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="tel:2818891359"
                className="icon fa-phone"
              >
                <span className="label">Phone</span>
              </a>
            </li>
          </ul>
        </Article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
