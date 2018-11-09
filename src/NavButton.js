import React, { Component } from 'react';
import './css/Nav.css';
import $ from "jquery";
import 'jquery-scrollify'

// Page anchors dictionary
const navAnchor  = {
    "home" : "homepage",
    "about" : "aboutme",
    "skills" : "myskills",
    "projects" : "myprojects",
    "contact" : "contactme"
};

// NavButton component for NavBar
class NavButton extends Component {
    constructor(props) {
        super(props);
        // Nav button for specific page
        this.title = props.name;
    }

    // Scroll to this page
    scrollTo() {
        $.scrollify.move("#"+navAnchor[this.title]);
    }

    // Change css for active nav
    activeNav() {
        $(this.refs.item).addClass("navActive");
    }

    // Remove css for inactive nav
    inactiveNav() {
        $(this.refs.item).removeClass("navActive");
    }

    render() {
        return (
            <div className="nav-item" onClick={this.scrollTo.bind(this)}>
                {/*<div className="nav-button"></div>*/}
                <span ref="item" className="navTitle">&nbsp;&nbsp;&nbsp;{this.title}</span>
            </div>
        );
    }
}

export default NavButton;