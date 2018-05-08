import React, { Component } from 'react';
import './Nav.css';

class NavButton extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>

        );
    }
}

export default NavButton;