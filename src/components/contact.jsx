import React, { Component } from "react";
import SocialIcons from "./social";

class ContactForm extends Component {
  render() {
    return (
      <div id="contactId"> 
        <div className="form-styling">
          <div>
            <u>
              <div style={{
                  paddingTop: "30px",
                  paddingLeft: "20px",
                  fontSize: "20px",
                }}>
                  <br />
              <p>
                Contact Form
              </p>
              </div>
              
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
