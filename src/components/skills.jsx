import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

class SkillComponent extends Component {
  state = {
    techSkills: [
      { type: "Python", level: 90 },
      { type: "C++", level: 60 },
      { type: "HTML5", level: 80 },
      { type: "CSS3", level: 70 },
      { type: "BootStrap4", level: 70 },
      { type: "React.JS", level: 70 },
      { type: "Machine Learning", level: 75 },
      { type: "Deep Learning", level: 70 },
      { type: "Natural Language Processing", level: 60 },
      { type: "Computer Vision", level: 60 },
      { type: "Image Processing", level: 65 },
      { type: "Reinforcement Learning", level: 70 },
      { type: "C", level: 65 },
      { type: "Blockchain", level: 50 },
      { type: "git", level: 70 },
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
      marginBottom: "30px",
    };

    return (
      <div>
        <div>
          <u>
            <p
              style={{
                fontSize: "25px",
                paddingLeft: "20px",
                marginBottom: "40px",
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
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SkillComponent;
