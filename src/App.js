import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "./app/layouts/main-layout/MainLayout";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
export default class App extends Component {

  render() {
    return (
      <>
      <Header/>
      <Switch>
        <Route path="/" component={MainLayout} />
      </Switch>
      <Footer/>
      </>
    );
  }
}
