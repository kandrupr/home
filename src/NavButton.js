import React, { Component } from 'react';
import './css/Nav.css';

class NavButton extends Component {
    constructor(props) {
        super(props);
        this.title = props.name;
    }

    scrollTo() {
        document.getElementById(this.title).scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"});
    }

    render() {
        return (
            <div className="nav-item" onClick={this.scrollTo.bind(this)}>
                {/*<div className="nav-button"></div>*/}
                <span className="navTitle">&nbsp;&nbsp;&nbsp;{this.title}</span>
            </div>

        );
    }
}

export default NavButton;