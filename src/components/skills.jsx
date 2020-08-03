import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

class SkillComponent extends Component {
  state = {
    techSkills: [
      { type: "Python", level: 90 },
      { type: "C++", level: 60 },
      { type: "HTML5", level: 80 },
      { type: "CSS3", level: 70 },
      { type: "BootStrap4", level: 72 },
      { type: "React.JS", level: 75 },
      { type: "Machine Learning", level: 78 },
      { type: "Deep Learning", level: 69 },
      { type: "Natural Language Processing", level: 63 },
      { type: "Computer Vision", level: 61 },
      { type: "Image Processing", level: 66 },
      { type: "Reinforcement Learning", level: 55 },
      { type: "C", level: 65 },
      { type: "Blockchain", level: 50 },
      { type: "git", level: 73 },
    ],
  };

  render() {
    const progressBarStyles = {
      marginTop: "20px",
      width: "40%",
      height: "20px",
      marginBottom: "20px",
      marginLeft: "20px",
      left: "0%",
      float: "left",
      display: "fixed",
    };
    const textStyle = {
      fontSize: "20px",
      paddingLeft: "20px",
      marginBottom: "30px",
    };

    return (
      <div id="skillsId" className="skills">
        <div>
          <u>
            <p
              style={{
                fontSize: "25px",
                paddingLeft: "20px",
                paddingBottom: "40px",
              }}
            >
              Skills:
            </p>
          </u>
          <p style={textStyle}>Languages and Technologies i speak:</p>
          {this.state.techSkills.map((skill) => (
            <ProgressBar
              now={skill.level}
              label={skill.type}
              style={progressBarStyles}
              key={skill.level}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SkillComponent;
