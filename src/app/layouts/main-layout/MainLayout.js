import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// import Header from "../../../components/shared/header/Header";
// import Footer from "../../../components/shared/footer/Footer"
import Home from "../../../components/pages/home/Home";
import About from "../../../components/pages/about us/About"
import Faq from "../../../components/pages/faq/Faq";
import Contacts from "../../../components/pages/contacts/Contacts";


export default class MainLayout extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component = {About}/>
          <Route path="/faq" component = {Faq}/>
          <Route path="/contacts" component={Contacts}/>

        </Switch>
      </div>
    );
  }
}
