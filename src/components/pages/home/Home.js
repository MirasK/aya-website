import React from "react";
import { NavLink } from "react-router-dom";
import download from '../../../assets/images/download.png';
import loan from '../../../assets/images/loan.png';
import shield from '../../../assets/images/shield.png';
import test from '../../../assets/images/test.png';

import "./Home.scss";

function Home() {
  return (
    <>
    <section className="banner">
      <div className="banner__content">
        <h6 className="banner__top">DON’T LOOK FURTHER, HERE IS THE KEY</h6>
        <h1 className="banner__title" >AYA - Future of Finance</h1>
        <p className="banner__subtitle" >Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et
            <br/>
            dolore magna aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt.
        </p>

        <a href="https://youtu.be/-Ut2aLfzeU0"><button className="banner__btn">Watch the video</button></a>
        <NavLink className="Banner__link" to="/contacts">
          <button className="banner__btn">Become partner</button>
        </NavLink>
      </div>
    </section>

    <section className = "work">
      <div className = "work-header">
        <h1 className = "work-header__main-title">How It Works</h1>
        <p className = "work__paragraph"></p>
      </div>
      <div className = "work-details">
          <div className = "work-detail">
            <i className = "icon-lightbulb ico"></i>
            <img src={download} alt="download" />
            <h2 className = "work-detail__title">Download the App</h2>
            <p className = "work__paragraph">Download the AYA app or bank's app with AYA SDK extension.</p>
          </div>
          <div className = "work-detail">
            <i className = "icon-tools ico"></i>
            <img src={loan} alt="loan" />
            <h2 className = "work-detail__title">Allow data processing</h2>
            <p className = "work__paragraph">Allow AYA to process data on your mobile phone and wait for the bank's decision.</p>
          </div>
          <div className = "work-detail">
            <i className = "icon-map ico"></i>
            <img src={shield} alt="shield" />
            <h2 className = "work-detail__title">Your Data is Secure</h2>
            <p className = "work__paragraph">Be sure, your data is secured and sanitized.</p>
          </div>

          <div className = "work-detail">
            <i className = "icon-map ico"></i>
            <img src={test} alt="test"/>
            <h2 className = "work-detail__title">You’re Approved!</h2>
            <p className = "work__paragraph">Once approved, congratulations! You’ve been approved for your loan!</p>
          </div>
      </div>
    </section>

    </>

  );
}
export default Home;
