import React, { Component } from "react";
import SocialIcons from "./social";
import axios from "axios";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  render() {
    return (
      <div>
        <div className="form-styling">
          <div>
            <u>
              <p
                style={{
                  marginTop: "20px",
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
