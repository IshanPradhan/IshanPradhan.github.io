import React, { Component } from "react";

class Background extends React.Component {
  state = {};
  render() {
    const bg = {
      background: "black",
      width: "100vw",
      height: "100vh",
    };

    return <div style={bg}></div>;
  }
}

export default Background;
