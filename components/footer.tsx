import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Cultural Fest 2025</h5>
            <p>NIT Jamshedpur</p>
            <p>Join us for an unforgettable experience of culture, creativity, and celebration!</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: NIT Jamshedpur, Jamshedpur, Jharkhand, India</li>
              <li><FontAwesomeIcon icon={faPhoneAlt} /> Phone: +91 657 123 4567</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> Email: culturalfest2025@nitjsr.ac.in</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/nitjamshedpur" className="text-white"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></li>
              <li><a href="https://twitter.com/nitjsr" className="text-white"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="https://www.instagram.com/nitjsr" className="text-white"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2025 NIT Jamshedpur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
