import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class ProjectComponent extends Component {
  render() {
    const cardStyling = {
      width: "30%",
      height: "250px",
      float: "left",
      marginLeft: "20px",
      marginBottom: "30px",
    };

    const headingStyler = {
      textAlign: "center",
      fontStyle: "italic",
      fontFamily: "Times New Roman",
      fontSize: "20px",
      background: "#336699",
      color: "white",
    };

    return (
      <div>
        <div>
          <u>
            <p
              style={{
                fontSize: "25px",
                paddingLeft: "20px",
                marginTop: "370px",
                marginBottom: "50px",
              }}
            >
              Recent Projects Undertaken
            </p>
          </u>
          <p
            style={{
              fontSize: "20px",
              paddingLeft: "20px",
              marginBottom: "50px",
            }}
          >
            A collection of my Recent and interesting projects
          </p>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <Card style={cardStyling}>
            <Card.Header style={headingStyler}>Should I translate?</Card.Header>
            <Card.Body>
              <Card.Title>Indian Language translator</Card.Title>
              <Card.Text>
                Indian Language Translation into 6 respective Languages.
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/IshanPradhan/Poetry-Generation"
                target="_blank"
              >
                Project Link
              </Button>
            </Card.Body>
          </Card>
          <Card style={cardStyling}>
            <Card.Header style={headingStyler}>Poetic or what?</Card.Header>
            <Card.Body>
              <Card.Title>Poetry Generator</Card.Title>
              <Card.Text>
                Generating Poems based on shakesphere's poems
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/IshanPradhan/Indian-Language-Translator"
                target="_blank"
              >
                Project Link
              </Button>
            </Card.Body>
          </Card>
          <Card style={cardStyling}>
            <Card.Header style={headingStyler}>
              You are not allowed here!
            </Card.Header>
            <Card.Body>
              <Card.Title>Website Blocker</Card.Title>
              <Card.Text>
                Blocking desired websites at specific time intervals
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/IshanPradhan/Website-Blocker"
                target="_blank"
              >
                Project Link
              </Button>
            </Card.Body>
          </Card>
          <Card style={cardStyling}>
            <Card.Header style={headingStyler}>What's this?</Card.Header>
            <Card.Body>
              <Card.Title>English Language Dictionary</Card.Title>
              <Card.Text>
                Blocking desired websites at specific time intervals
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/IshanPradhan/Website-Blocker"
                target="_blank"
              >
                Project Link
              </Button>
            </Card.Body>
          </Card>
          <Card style={cardStyling}>
            <Card.Header style={headingStyler}>Show me some movie!</Card.Header>
            <Card.Body>
              <Card.Title>Movie Library</Card.Title>
              <Card.Text>Rendering Movies</Card.Text>
              <Button
                variant="primary"
                href="https://github.com/IshanPradhan/video-library"
                target="_blank"
              >
                Project Link
              </Button>
            </Card.Body>
          </Card>
          <Card style={cardStyling}>
            <Card.Header style={headingStyler}>What Next?</Card.Header>
            <Card.Body>
              <Card.Title>to-do List</Card.Title>
              <Card.Text>Fully functional to-do list using DOM</Card.Text>
              <Button
                variant="primary"
                href="https://github.com/IshanPradhan/Website-Blocker"
                target="_blank"
              >
                Project Link
              </Button>
            </Card.Body>
          </Card>
          <br />
        </div>
      </div>
    );
  }
}

export default ProjectComponent;
