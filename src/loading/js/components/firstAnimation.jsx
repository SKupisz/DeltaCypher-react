import React from 'react';
import FirstStageContent from "../subcomponents/letters.jsx";

export default class Letters extends React.Component{
    constructor(props){
        super(props);
        this.welcomeHeader = React.createRef();
        this.secondHeader = React.createRef();
        this.all = React.createRef();
    }
    changeLetters(){
        this.welcomeHeader.current.classList.add("dissapeared");
        this.secondHeader.current.classList.remove("not-visible");
        setTimeout(() => this.endThisPhase(),2000);
    }
    endThisPhase(){
        this.all.current.classList.add("not-visible");
        setTimeout(() => this.all.current.classList.add("dissapeared"), 1000);
        
    }
    render(){
        setTimeout(() => this.changeLetters(),4000);
        return(
            <section className = "first-stage" ref = {this.all}>
            <header className = "welcome-header" ref = {this.welcomeHeader}>
                <FirstStageContent firstletter = "Z" secondletter="%"/>
                <FirstStageContent firstletter = "!" secondletter="Q"/>
                <FirstStageContent firstletter = "A" secondletter=":"/>
                <FirstStageContent firstletter = "B" secondletter="I"/>
                <FirstStageContent firstletter = "=" secondletter="["/>
                <FirstStageContent firstletter = "." secondletter="/"/>
                <FirstStageContent firstletter = "z" secondletter="%"/>
                <FirstStageContent firstletter = "'" secondletter="+"/>
                <FirstStageContent firstletter = ";" secondletter="%"/>
                <FirstStageContent firstletter = "4" secondletter="="/>
                <FirstStageContent firstletter = "+" secondletter="*"/>
                <FirstStageContent firstletter = "8" secondletter=")"/>
                <FirstStageContent firstletter = "k" secondletter="Z"/>
              </header>
              <header className="final-header not-visible" ref = {this.secondHeader}>WELCOME TO DELTA</header>
            </section>
        );
    }
}