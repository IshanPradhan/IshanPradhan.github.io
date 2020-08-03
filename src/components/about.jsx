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
      marginTop: "80px",
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
            "git add .",
            'git commit -m "Fancy Commit"',
            "git push",
          ]}
          eraseDelay="400"
          typingDelay="100"
          speed="150"
        />
      );
    };

    return (
      <div id="aboutId" className="about">
        <div>
          <div style={{ paddingTop: 20, fontSize: 20 }}>
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
            src="https://media.istockphoto.com/vectors/man-hipster-avatar-cartoon-guy-with-black-hair-and-red-glasses-vector-id1143957175?k=6&m=1143957175&s=170667a&w=0&h=J0u91vdkqRWUExcUjvYmNoBBuV8di-KMQdtGW-o5CPQ="
            height="100px"
            widht="100px"
            style={imageStyling}
            alt="Profile img"
          />
        </center>
        <p style={fontStyling}>{this.state.description}</p>
      </div>
    );
  }
}

export default About;