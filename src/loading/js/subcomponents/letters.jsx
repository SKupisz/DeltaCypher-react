import React from "react";

export default class FirstSlideContent extends React.Component{
    render(){
        return(
    <label class = "forTheReplace">
        <div class = "first-letter">{this.props.firstletter}</div>
        <div class = "second-letter">{this.props.secondletter}</div>
      </label>);
    }
}