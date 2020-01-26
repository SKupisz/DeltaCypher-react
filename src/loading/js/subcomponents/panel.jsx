import React from "react";
import {Link} from "react-router-dom";

export default class Panel extends React.Component{
    render(){
        return(
            <section className="panel-container">
                <header className="form-mainHeader">Cyphering panel</header>
                <form method = "post" action="">
                    <input type="text" name="access-key" className="auth-keyInput" placeholder = "Authorization key..."/>
                    <textarea placeholder = "Your text here..." name="cypher-content" className="cypher-content"></textarea>
                    <button type="submit" className="goCyphering">Encrypt</button>
                </form>
                <section className="buttons-section">
                    <Link to = "/home">
                        <button className="link-button">Home</button>
                    </Link>
                    <Link to = "/about">
                        <button className="link-button">About us</button>
                    </Link>
                </section>
            </section>
        );
    }
}