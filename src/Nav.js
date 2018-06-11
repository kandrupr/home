import React, { Component } from 'react';
import NavButton from './NavButton'
import './css/Nav.css';
import $ from "jquery";

const navColors  = {
    "home" : "#FFFFFF",
    "about" : "#556B2F",
    "skills" : "#2DA1A1",
    "projects" : "#FFAB40",
    "contact" : "#121212"
};

var maps;
class Nav extends Component {
    componentDidMount() {
        maps = {
            "home" : this.refs.navHome,
            "about" : this.refs.navAbout,
            "skills" : this.refs.navSkills,
            "projects" : this.refs.navProjects,
            "contact" : this.refs.navContact
        };
    }

    changeNav(a, b, c='Roboto') {
        $(".navTitle").css({
            color : navColors[b],
            fontFamily : c,
            transition : 'color 0.5s linear, font-size 1s ease, font-family 1s ease'
        });
        maps[a].inactiveNav();
        maps[b].activeNav();
    }

    render() {
        return (
            <div id="nav">
                <div ref="navHolder" id="navHolder">
                    <NavButton ref="navHome" name="home"/>
                    <NavButton ref="navAbout" name="about"/>
                    <NavButton ref="navSkills" name="skills"/>
                    <NavButton ref="navProjects" name="projects"/>
                    <NavButton ref="navContact" name="contact"/>
                </div>
            </div>
        );
    }
}

export default Nav;