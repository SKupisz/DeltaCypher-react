import React from 'react';
import Particles from "react-particles-js";
import {Link} from "react-router-dom";
import Speech from "react-speech";

import logo2 from "../../../img/logo2.png";
import ceo from "../../../img/ceo.webp";


export default class About extends React.Component{
    constructor(props){
        super(props);
        this.deltaDesc = "What is Delta? It's a cyphering system that will secure your text data like a dream. By the construction of our cypher, final cryptogram could be decrypted as even dozens of results. How we are making this that safe? By the cypher structure — during cyphering process, we are using many different mathematic transformations, like integrals, infinitesimal calculus and many others. However, the cyphering process is not fixed - we are still adding more and more calculus to that, becuase we believe this will make our cypher stronger.";
        //this.deltaForRead = "What is Delta? It's a cyphering system that will secure your text data like a dream. By the construction of our cypher, final cryptogram could be decrypted as even dozens of results. How we are making this that safe? During cyphering process, we are using many different mathematic transformations, like integrals, infinitesimal calculus and many others. However, the cyphering process is not fixed, we are still adding more and more calculus to that, becuase we believe this will make our cypher stronger.";
        this.deltaForRead = "Delta is an experimental cypher made by the antares group. We hope that this project can be a solution of many problems in cryptography or it would be just an interesting activity. If you want to contact us write on sgk-news@wp.pl";
        this.speechRef = React.createRef();
    }
    render(){
        return(
            <section className="about-containter">
                <header className="about-mainHeader">About us</header>
                <section className="describe delta-describe">
                    <img src={logo2} alt="" className = "delta-icon"/>
                    <section className="speech-container">
                    <Speech
                    className = "button" textAsButton={true} voice="Google UK English Female" displayText="🔊" text = {this.deltaForRead}/></section>
                    <div className="describe-content">{this.deltaDesc}</div>
                </section>
                <section className="describe stuff-describe">
                    <img src={ceo} alt="" className = "stuff-icon"/>
                    <div className="describe-content">Simon Kupisz - Founder and CEO</div>
                </section>
                <section className="buttons-section">
                    <Link to = "/home">
                        <button className="link-button">Home</button>
                    </Link>
                    <Link to = "/panel">
                        <button className="link-button">Cyphering panel</button>
                    </Link>    
                </section>
                
                <Particles ref = {this.particles} width = {"100%"} className = "particles-content"
                params = {{ 
                    particles: {
                        size: {
                            value: 5,
                            random: true,
                            anim: {
                              enable: false,
                              speed: 40,
                              size_min: 0.1,
                              size_max: 1,
                              sync: false
                            }
                          },
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 700
                            }
                        },
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#ff0000",
            					blur: 1
            				}
                        },
                        color: {
                            value: "#ff0000"
                        },
                        shape:{
                            type: "circle",
                            polygon: {
                                nb_sides: 5
                            }
                        }
                    }
                }}/>

            </section>
        );
    }
}