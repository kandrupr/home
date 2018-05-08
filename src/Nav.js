import React, { Component } from 'react';
import NavButton from './NavButton'
import './Nav.css';


class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <div id="navHolder">
                    <NavButton ref="navHome" name="home"/>
                    <NavButton ref="navSkills" name="skills"/>
                    <NavButton ref="navProjects" name="projects"/>
                    <NavButton ref="navContact" name="contact"/>
                </div>
            </div>
        );
    }
}

export default Nav;