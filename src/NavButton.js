import React, { Component } from 'react';
import './Nav.css';

class NavButton extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="nav-item">
                <div className="nav-button"></div>
                <span className="navTitle">&nbsp;&nbsp;&nbsp;{this.props.name}</span>
            </div>

        );
    }
}

export default NavButton;