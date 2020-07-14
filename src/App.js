import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navbar";
import About from "./components/about";
import SkillComponent from "./components/skills";
import ProjectComponent from "./components/projects";
import ContactForm from "./components/contact";

function App() {
  return (
    <div>
      <Header />
      <About />
      <SkillComponent />
      <ProjectComponent />
      <ContactForm />
    </div>
  );
}

export default App;
