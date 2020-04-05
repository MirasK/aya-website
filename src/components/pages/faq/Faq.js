import React from "react";

import "./Faq.scss";

export default function Faq(){
    return (
        <div>
            <h1 className="main-title">
                QUESTIONS AND ANSWERS
            </h1>

            <div className="faq">


                <div className="faq__content">
                    <h2 className="faq__content__title">How to install AYA?</h2>
                    <br/>
                    <p className="faq__content__text">
                        It all depends on the requirements of the bank. The Bank may require you to download its mobile application or go to their web application through your phone or download a separate mobile application.
                    </p>
                </div>

                <div className="faq__content">
                    <h2 className="faq__content__title">How long does data processing take?</h2>
                    <br/>

                    <p className="faq__content__text">
                        Data from the phone is extracted and transferred to the bank in 1-2 minutes. Then it all depends on the bank. In general, the whole procedure takes about 10 minutes.
                    </p>
                </div>


                <div className="faq__content">
                    <h2 className="faq__content__title">Who are your customers?</h2>
                    <br/>

                    <p className="faq__content__text">
                        In general, banks and microfinance organizations. And other organizations providing financial and credit services.
                    </p>
                </div>
            </div>
        </div>

    );
}
