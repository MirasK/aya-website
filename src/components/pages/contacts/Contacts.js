import React from 'react';

import "./Contacts.scss";

// import maps from "../../../assets/images/maps.jpg"

export default function Contacts(){
    return (
        <div className="Contacts">

            <div className="Contacts__main">
                <h1>Contact us</h1>
            </div>

            <div className="Contacts__contents">
                <div className="Contacts__column">
                    {/* <img className="Contacts__map" src={maps} alt="map"/> */}
                </div>
                
                <div className="Contacts__column">
                    <form>
                        <label className="Contacts__title">First Name</label>
                        <input className="Contacts__input" type="text" name ="firstname" placeholder="Your name"/>
                        <label className="Contacts__title">Last Name</label>
                        <input className="Contacts__input" type="text" name ="lastname" placeholder="Your surname"/>
                        <label className="Contacts__title">Country</label>
                        <select className="Contacts__input">
                            <option>Kazakhstan</option>
                            <option>USA</option>
                            <option>Australia</option>
                            <option>Korea</option>
                        </select>
                        <label className="Contacts__title">Message</label>
                        <textarea className="Contacts__input" name="message" placeholder="Write something ..."></textarea>
                        <input className="Contacts__submit" type = "submit" value="submit"></input>
                    </form>
                </div>

            </div>

        </div>
    );
}