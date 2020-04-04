import React from 'react';
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-top">
        <div className="Footer-top-left">
          <form action="#" className="">
            <input type="text" class="Footer-top-left__email" placeholder="Enter your email"/>
            <button className="Footer-top-left__submit" type = "submit">SUBSCRIBE</button>

          </form>
        </div>

      </div>
        <ul className="Footer-menu-social">
          <li className="menu-social-item">
            <a href="https://www.facebook.com/"  className="social-facebook" title="Facebook"> </a>
          </li>
          <li className="menu-social-item">
            <a href="https://www.instagram.com/" className="social-instagram" title="Instagram"> </a>
          </li>
          <li className="menu-social-item">
            <a href="https://www.linkedin.com/" className="social-linkedin" title="Linkedin"> </a>
          </li>
          <li className="menu-social-item">
            <a href="https://www.twitter.com/" className="social-twitter" title="Twitter"> </a>
          </li>
        </ul>
    </footer>
  );
}