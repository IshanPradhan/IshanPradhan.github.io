import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

class SocialIcons extends Component {
  state = {};
  render() {
    return (
      <div>
        <h5>You can connect with me here!</h5>
        <a
          href="https://www.facebook.com/ishan.pradhan.77/"
          className="facebook social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/__ishanpradhan__/"
          className="instagram social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/ishan-pradhan-8862ab167/"
          className="linkedin social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a
          href="https://github.com/IshanPradhan"
          className="github social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    );
  }
}

export default SocialIcons;
