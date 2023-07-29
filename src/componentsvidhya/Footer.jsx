import React from 'react';
import './Fotter.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="main-footer">
        <div className="logoinfo" data-aos="fade-up">
          <div className="contact-details">
            <h1>Contact Us</h1>
            <ul>
              <li>
                <i className="fa fa-phone"></i><a href="tel:+910000000000">+91 0000000000</a>
              </li>
              <li>
                <i className="fa fa-envelope"></i><a href="mailto:arorahemant75@gmail.com">elevatehub23@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="com" data-aos="fade-up">
          <h1>About</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="info" data-aos="fade-up">
          <h1>Social Media</h1>
          <div className="sociallogos">
            <div className="logobox">
              <a href="#" className="fa fa-instagram"></a>
              <a href="#" className="fa fa-linkedin"></a>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-youtube-play"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; Elevate Hub {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
