import React from 'react';
import Particles from 'react-particles-js';

export default class MainSite extends React.Component{
    constructor(props){
        super(props);
        this.launch = this.launch.bind(this);
        this.content = React.createRef();
        this.particles = React.createRef();
    }
    launch(){
        this.content.current.classList.remove("dissapeared");
        setTimeout(() => this.content.current.classList.remove("not-visible"),100);
    }
    render(){
        setTimeout(() => this.launch(), 9100);
        return(
            <section className="main-content not-visible" ref = {this.content}>
                <header className="main-header">Delta</header>
                <section className="short-describe">
                    The Delta is a small project about cyphering. Our goal? To make securing our data as simple as possible.
                </section>
                <section className="short-describe">
                    During its beginning in February 2019 we have been constantly developing the quality and the level of security we can provide you.
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
        )
    }
}
//