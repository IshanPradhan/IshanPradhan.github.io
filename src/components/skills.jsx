import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

class SkillComponent extends Component {
  state = {
    techSkills: [
      { type: "Python", level: 99 },
      { type: "C++", level: 98 },
      { type: "HTML5", level: 87 },
      { type: "CSS3", level: 92 },
      { type: "BootStrap4", level: 90 },
      { type: "React.JS", level: 100 },
      { type: "Machine Learning", level: 16 },
      { type: "Deep Learning", level: 25 },
      { type: "Natural Language Processing", level: 28 },
      { type: "Computer Vision", level: 28 },
      { type: "Image Processing", level: 28 },
      { type: "Blockchain", level: 28 },
      { type: "git", level: 20 },
      { type: "C", level: 20 },
      { type: "Reinforcement Learning", level: 50 },
    ],
  };

  constructor(props) {
    super(props);
  }

  render() {
    const progressBarStyles = {
      marginTop: "20px",
      width: "30%",
      height: "20px",
      marginBottom: "20px",
      marginLeft: "20px",
      left: "0%",
      float: "left",
    };
    const textStyle = {
      fontSize: "20px",
      paddingLeft: "20px",
    };

    return (
      <div style={{ marginBottom: "320px" }}>
        <div>
          <u>
            <p style={{ fontSize: "25px", paddingLeft: "20px" }}>Skills:</p>
          </u>
          <p style={textStyle}>Languages and Technologies i speak:</p>
          {this.state.techSkills.map((skill) => (
            <ProgressBar
              now={skill.level}
              label={skill.type}
              style={progressBarStyles}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SkillComponent;
