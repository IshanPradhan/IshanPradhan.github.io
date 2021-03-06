import React, { Component } from "react";
import SocialIcons from "./social";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const initalState = {
  name: "",
  email: "",
  message: "",
  emailError: "",
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = initalState;

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  validate = () => {
    let emailError = "";
    if (!this.state.email.includes("@")) {
      emailError = "invalid email id";
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const name = this.state.name;
    const email = this.state.email;
    const message = this.state.message;
    const template_id = "portfolio_contact";
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initalState);
    }

    this.sendMail(template_id, {
      message_html: message,
      from_name: name,
      reply_to: email,
    });

    //send notification
    const notify = () => {
      toast("Thanks for Contacting", { autoClose: 5000 });
    };
    notify();

    //clear input fields
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  sendMail(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => console.error("Error message:", err));
  }

  render() {
    return (
      <div id="contactId">
        <div className="form-styling">
          <div>
            <u>
              <div
                style={{
                  paddingTop: "30px",
                  paddingLeft: "20px",
                  fontSize: "20px",
                }}
              >
                <br />
                <p>Wanna Connect?</p>
              </div>
            </u>
            <p
              style={{
                paddingLeft: "20px",
                fontFamily: "Times New Roman",
                fontSize: "20px",
                textAlign: "justify",
              }}
              className="contactText"
            >
              If you got something interesting for me or open for discussion you
              can get in touch with me here!
            </p>
          </div>
          <div className="form">
            <center>
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
                <br />
                <input
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
                <br />

                <div style={{ color: "red" }}>{this.state.emailError}</div>

                <input
                  type="text"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleMessageChange}
                />
                <br />
                <button
                  className="submitbuttom"
                  onClick={this.handleSubmit}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </center>
          </div>
          <center>
            <div className="social-icons">
              <SocialIcons />
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default ContactForm;
