import React, { Component } from 'react';
import NavButton from './NavButton'
import './css/Nav.css';
import $ from "jquery";
import home from './assets/pk_home.png'
import about from './assets/pk_about.png'
import skills from './assets/pk_skills.png'
import projects from './assets/pk_projects.png'
import contact from './assets/pk_contact.png'


const navColors  = {
    "home" : "#FFFFFF",
    "about" : "#125245",
    "skills" : "#2DA1A1",
    "projects" : "#FFAB40",
    "contact" : "#000000"
};

const navLogo  = {
    "home" : home,
    "about" : about,
    "skills" : skills,
    "projects" : projects,
    "contact" : contact
};

var maps;
class Nav extends Component {
    constructor() {
        super();
        this.state = {
            logo: navLogo["home"],
        };
    }
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
        this.setState({logo: navLogo[b]});
    }

    hover() {
        $("#nav").addClass('animated jello');
        setTimeout(function() {
            $("#nav").removeClass('animated jello');
        }, 1000);
    }

    render() {
        return (
            <div id="nav">
                <div ref="navHolder" id="navHolder">
                    {/*<NavButton ref="navHome" name="home"/>*/}
                    <NavButton ref="navAbout" name="about"/>
                    <NavButton ref="navSkills" name="skills"/>
                    <NavButton ref="navProjects" name="projects"/>
                    <NavButton ref="navContact" name="contact"/>
                </div>
                <p id="navLogo" onMouseOver={this.hover.bind(this)}><img alt="Logo" src={this.state.logo} /></p>
            </div>
        );
    }
}

export default Nav;