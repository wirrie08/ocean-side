import React, {
    Component
} from "react";
import logo from "../images/logo.svg";
import {
    FaAlignRight
} from "react-icons/fa";
import {
    Link
} from "react-router-dom";

export default class Navbar extends Component {
    state = {
        IsOpen: false
    };
    handleToggle = () => {
        this.setState({
            IsOpen: !this.state.IsOpen
        });
    };
    render() {
        return ( <nav className = "navbar" >
            <div className = "nav-center" >
            <div className = "nav-header" >
            <Link to = "/">
            <img src = {logo }
            alt = "beach logo" />
            </Link> 
            <button type = "btn"
            className = "nav-btn"
            onClick = {this.handleToggle} >
            <FaAlignRight className = "nav-icon" />
            </button>
            </div> 
            <ul className = { this.state.IsOpen ? "nav-links show-nav" : "nav-links"
            } >
            <li >
            <Link to = "/" > Home </Link> </li> <li>
            <Link to = "/rooms" > Rooms </Link> </li> </ul> </div> </nav>
        );
    }
}
