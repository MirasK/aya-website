import React from "react";

import "./About.scss";


export default function About() {
  return (
    <>

    <section className="about">
      <div className="about__content">
        <h1 className="about__title">How it all started</h1>
        <p className="about__text">
          It all started with the idea of making the financial sphere better. Especially in the loaning part.
          In many developing countries, the loan process takes a long time and requires a lot of documents. And some members of society do not even have the opportunity to formalize it.
          So, our team decided to solve these 2 problems.
        </p>

        // <p className="about__text">
        //   We believe that in the XXI century,
        //   buyers should have the opportunity to purchase high quality goods at an affordable price
        //   - everywhere and always. Do not put off until tomorrow what you can do today.
        //   Visit our online store for outdoor sports products and contact us if you have any questions or suggestions.
        // </p>
        <h1 className="about__title">What we do</h1>

        <p className="about__text">
          AYA is an SDK that retrieves metadata from a potential borrower's mobile phone. Based on this, the user is categorized to one of five categories of creditworthiness. Moreover, all customer information is fully protected and sanitized.
          AYA can be used by a bank as a separate mobile application, as an add-on for the bank’s mobile application, and as an additional extension for the bank’s website.
        </p>

        <h1 className="about__title">How we do it</h1>

        <p className="about__text">
        Information about a loan applicant is processed as quickly as possible - mostly within a few minutes - and the bank, on the basis of the received data, will be enabled to make a credit decision. AYA allows banks do it to quickly, efficiently, and in a secure manner.
        AYA gains access to banks and microfinance organizations for two billion of still unbankable population and boost their repayment ratios. It also helps governments to fight social disasters using AI-powered technology.
        </p>

        // <h1 className="about__title">Why we do it</h1>
        //
        // <p className="about__text">
        //   With nearly half of the global population unable to participate in the formal financial sector, the world misses out on countless new ideas, businesses, and innovations. At Tala, we believe every person deserves the opportunity to take charge of their financial life. That’s why we’re building a financial system that works for everyone.        </p>
      </div>



    </section>

    </>
  );
}
