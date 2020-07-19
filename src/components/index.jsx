import React, { Component } from "react";
import Header from "./navbar";
import About from "./about";
import SkillComponent from "./skills";
import ProjectComponent from "./projects";
import ContactForm from "./contact";

class IndexPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <About />
        </div>
        <div>
          <SkillComponent />
        </div>
        <div>
          <ProjectComponent />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default IndexPage;
