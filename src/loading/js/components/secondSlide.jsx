import React from "react";

export default class SecondSlide extends React.Component{
    constructor(props){
        super(props);
        this.all = React.createRef();
        this.launchSecondSection = this.launchSecondSection.bind(this);
        this.endThisPhase = this.endThisPhase.bind(this);
    }
    launchSecondSection(){
        this.all.current.classList.remove("dissapeared");
        setTimeout(() => this.all.current.classList.remove("not-visible"),100);
        setTimeout(() => this.endThisPhase(), 3000);
    }
    endThisPhase(){
        this.all.current.classList.add("not-visible");
        setTimeout(() => this.all.current.classList.add("dissapeared"),100);
    }
    render(){
        setTimeout(() => this.launchSecondSection(), 6000);
        return(
        <section className = "second-stage dissapeared not-visible" ref = {this.all}>
            <header className="main-header">What is delta?</header>
            <section className="sub-headers">
                <div className="question bird">Is it a bird? - No!</div>
                <div className="question plane">Is it a plane? - No!</div>
            </section>
            <header className="final-question">Then what is it?</header>
        </section>);
    }
}