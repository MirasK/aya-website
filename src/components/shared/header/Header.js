import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
// import logo from "../../../assets/images/logo.png";

export default class Header extends Component {

  render (){ 
      
      return (
        <header className="Header">
          <div className="Header-top">
            <NavLink className="Header__link" to="/">
              <h1>AYA</h1>
              {/* <img className ="Header__logo" src={logo} alt="logo"></img> */}
            </NavLink>

            <nav className="Header__nav"> 
              <NavLink exact className="Header__link Header__link_active" to="/">
                Home
              </NavLink>
              <NavLink className="Header__link" to="/about">
                About us
              </NavLink>
              <NavLink className="Header__link" to="/contacts">
                Contacts
              </NavLink>
              <NavLink className="Header__link" to="/faq">
                FAQ
              </NavLink>
            </nav>
          </div>
          
          {/* <header className="Header__mobile">
            <div className="Header-mobile-top" id="mobile-top">
             <NavLink className="Header__link" to="/">
                <img className ="Header__logo" src={logo} alt="logo"></img>
              </NavLink> 
              <i className = "icon-menu icon-menu-mobile" id = "hamburger"></i>

            </div>

            <nav className = "Header-mobile" id = "Header-mobile">
              <NavLink exact className="Header__link Header__link_mobile" to="/">
                Home
              </NavLink>
              <NavLink className="Header__link Header__link_mobile" to="/about">
                About us
              </NavLink>
              <NavLink className="Header__link Header__link_mobile" to="/contacts">
                Contacts
              </NavLink>
              <NavLink className="Header__link Header__link_mobile" to="/faq">
                FAQ
              </NavLink>
            </nav>

          </header>  */}
        </header>

  
      );
    }
  }



