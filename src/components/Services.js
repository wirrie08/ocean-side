import React, {Component} from "react";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
    state = {
        services: [{
                icon: <FaCocktail /> ,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque, in."
            },
            {
                icon: <FaHiking /> ,
                title: "free hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque, in."
            },
            {
                icon: <FaShuttleVan /> ,
                title: "free shuttle services",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque, in."
            },
            {
                icon: <FaBeer /> ,
                title: "variety of drinks",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque, in."
            }
        ]
    };
    render() {
        return ( <section className = 'services' >
            <Title title = "services"/>
            <div className = "services-center"> {
                this.state.services.map((item, index) => {
                        return ( <article key = {index} className = 'services' >
                            <span > { item.icon} </span> <h6 > {item.title} </h6>
                             <p> {item.info} </p> 
                             </article>)
                            })} 
                </div> 
                </section>
            );
        }
    }
