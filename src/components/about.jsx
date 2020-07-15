import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";

class About extends Component {
  state = {
    description:
      "Hi! I am Ishan Pradhan, Final year undergrad student at SVVV, Indore, I have worked on many domains including Machine learning, Deeplearning, Computer Vision, NLP, Blockchain, Augmented Reality and also on some cloud platforms like Amazon Web Services(AWS), Google CloudPlatform (GCP) and a little bit on salesforce, As i already said, I'm a self driven,self motivated developer who loves learning and experimenting on new things.",
  };
  render() {
    const fontStyling = {
      margin: "20px",
      textAlign: "justify",
      fontFamily: "Trebuchet MS",
      fontSize: 20,
      marginTop: "120px",
    };

    const imageStyling = {
      borderRadius: "50%",
      margin: "20px 0px 0px 0px",
    };

    const ReactTypingEffectDemoLine1 = () => {
      return (
        <ReactTypingEffect staticText="Transforming ideas into reality!" />
      );
    };

    const ReactTypingEffectDemoLine2 = () => {
      return (
        <ReactTypingEffect
          text={[
            "git init",
            "git add .",
            'git commit -m "Fancy Commit"',
            "git add origin <URL>",
            "git push origin master",
          ]}
          eraseDelay="400"
          typingDelay="100"
          speed="150"
        />
      );
    };

    return (
      <div>
        <div>
          <div style={{ marginTop: 20, fontSize: 20 }}>
            <center>
              <ReactTypingEffectDemoLine1 />
            </center>
          </div>
          <div style={{ fontSize: 30 }}>
            <center>
              <ReactTypingEffectDemoLine2 />
            </center>
          </div>
        </div>
        <center>
          <img
            src="https://storage.cloud.google.com/picture/Photo.jpg"
            height="100px"
            widht="100px"
            style={imageStyling}
          />
        </center>
        <p style={fontStyling}>{this.state.description}</p>
      </div>
    );
  }
}

export default About;
