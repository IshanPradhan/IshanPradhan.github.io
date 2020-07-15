import React, { Component } from "react";
import SocialIcons from "./social";

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

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
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
            <form className="contact-form">
              <div className="input-styling">
                <input type="text" placeholder="Full Name" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <input type="text" placeholder="Message" />
                <br />
                <button>Hit me up!</button>
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
