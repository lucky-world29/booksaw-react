// TopBar.jsx

import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // ← now using proper FA user icon

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-inner">

        <div className="social-icons">
          <a className="facebook" href="https://www.facebook.com/abinash.behera.9674227" target='blank'><FontAwesomeIcon icon={faFacebookF} /></a>
          <a className="instagram" href="https://www.instagram.com/lucky_world29/" target='blank'><FontAwesomeIcon icon={faInstagram} /></a>
          <a className="github" href="https://github.com/lucky-world29" target='blank'><FontAwesomeIcon icon={faGithub} /></a>
          <a className="linkedin" href="https://www.linkedin.com/in/abinashbehera9898/" target='blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>

        <div className="account-btn">Enjoy Your Reading</div>

      </div>
    </div>
  );
};

export default TopBar;