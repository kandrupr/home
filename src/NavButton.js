import React, { Component } from 'react';
import './css/Nav.css';
import $ from "jquery";

class NavButton extends Component {
    constructor(props) {
        super(props);
        this.title = props.name;
    }

    scrollTo() {
        document.getElementById(this.title).scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"});
    }

    activeNav() {
        $(this.refs.item).addClass("navActive");
    }

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