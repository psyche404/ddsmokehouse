import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <h4>Contact Us</h4>
      <p>(123) 456-7890</p>
      <p>info@dirtydonssmokehouse.com</p>
    </div>
    <div className="footer-content">
      <h4>Follow Us</h4>
      <ul className="social-icons">
        <li><a href="https://www.facebook.com/DirtyDonsSmokehouse" target="_blank" rel="noreferrer">Facebook</a></li>
        <li><a href="https://www.instagram.com/dirtydonssmokehouse" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a href="https://twitter.com/dirtydonsmoke" target="_blank" rel="noreferrer">Twitter</a></li>
      </ul>
    </div>
    <div className="footer-content">
      <h4>Location</h4>
      <p>Metro Detroit, Michigan</p>
    </div>
  </footer>
);

export default Footer;
