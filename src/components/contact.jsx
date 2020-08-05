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
                Wanna Connect?
              </p>
              </div>
              
            </u>
            <p
              style={{
                paddingLeft: "20px",
                fontFamily: "Times New Roman",
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              If you got something interesting for me or open for discussion can
              get in touch with me here!
            </p>
          </div>
          <div className="form">
            <center>
              <form>
                <input type="text" placeholder="Name" /><br />
                <input type="text" placeholder="Email" /><br />
                <input type="text" placeholder="Message" /><br />
                <button className="submitbuttom">Submit</button>
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