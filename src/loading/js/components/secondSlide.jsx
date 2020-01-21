import React from "react";

export default class SecondSlide extends React.Component{
    constructor(props){
        super(props);
        this.all = React.createRef();
    }
    launchSecondSection(){
        this.all.current.classList.remove("dissapeared");
        setTimeout(() => this.all.current.classList.remove("not-visible"),100);
    }
    render(){
        setTimeout(() => this.launchSecondSection(), 6000);
        return(
        <section class = "second-stage dissapeared not-visible" ref = {this.all}>
        
        </section>);
    }
}