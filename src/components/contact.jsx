import React, { Component } from "react";
import SocialIcons from "./social";
import axios from "axios";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  onNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  onEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onMessageChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: "this.state",
    }).then((response) => {
      if (response.data.status === "sucess") {
        alert("Thanks for Contacting Me! :)");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message Failed to send");
      }
    });
  }

  render() {
    return (
      <div>
        <div className="form-styling">
          <div>
            <u>
              <p
                style={{
                  marginTop: "550px",
                  paddingLeft: "20px",
                  fontSize: "20px",
                }}
              >
                Contact Form
              </p>
            </u>
            <p
              style={{
                paddingLeft: "20px",
                fontFamily: "Times New Roman",
                fontSize: "20px",
              }}
            >
              If you got something interesting for me or open for discussion can
              get in touch with me here!
            </p>
          </div>
          <center>
            <form
              className="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              action="POST"
            >
              <div className="input-styling">
                <input type="text" placeholder="Full Name" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <input type="text" placeholder="Message" />
                <br />
                <button type="submit">Hit me up!</button>
              </div>
              <div className="social-icons">
                <SocialIcons />
              </div>
            </form>
          </center>
        </div>
      </div>
    );
  }
}

export default ContactForm;
