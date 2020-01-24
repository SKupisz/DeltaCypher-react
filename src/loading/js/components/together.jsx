import React from "react";
import Letters from "./firstAnimation.jsx";
import SecondSlide from "./secondSlide.jsx";
import MainSite from "./finalSite.jsx";

export default class Together extends React.Component{
    render(){
        return(
            <section className="welcome-container">
                <Letters/>
                <SecondSlide/>
                <MainSite/>
            </section>
        );
    }
}