import React, { Component } from 'react';
import './css/Layout.css';
import Home from './Home.js'
import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Nav from './Nav.js'
import $ from 'jquery';
import {Row, Col} from 'react-materialize'

var firstAbout = true;
var firstSkill = true;
var firstProjects = true;
var firstContact = true;

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            current: "home",
        };
    }
    inView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    componentDidMount() {
        // document.getElementById('home').scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"});
        //window.history.replaceState(null, '', '/');
        this.changeNavColor("home");

        var that = this;
        $(window).scroll(function() {
            if(that.inView("#homeFinder")){
                if(that.state.current !== "home") {
                    that.changeNavColor("home");
                }
            } else if(that.inView("#aboutFinder")) {
                if(that.state.current !== "about") {
                    if(firstAbout) {
                        if(window.innerWidth > 300) {
                            firstAbout = false;
                            $("#aboutLeft").fadeIn(2000);
                            $("#aboutRight").fadeIn(2000);
                        }
                    }
                    that.changeNavColor("about");
                }
            } else if(that.inView("#projectsFinder")) {
                if(that.state.current !== "projects") {
                    that.changeNavColor("projects");
                }
            } else if(that.inView("#skillsFinder")) {
                if(that.state.current !== "skills") {
                    if (firstSkill) {
                        firstSkill = false;
                        that.refs.skills.startTyping();
                    }
                    that.changeNavColor("skills");
                }
                if(firstProjects){
                    if (that.inView("#projectsStart")) {
                        if(window.innerWidth > 1024) {
                            firstProjects = false;
                            $("#projectsTopSlider").addClass('animated bounceInRight');
                            $("#projectHolder").addClass('animated bounceInLeft');
                        }
                    }
                }
            } else if(that.inView("#contactFinder")) {
                if(that.state.current !== "contact") {
                    if (firstContact) {
                        firstContact = false;
                        // something cool?
                    }
                    that.changeNavColor("contact");
                }
            }
        });
    }

    changeNavColor(a, font) {
        this.refs.nav.changeNav(this.state.current, a, font);
        this.setState({current: a});
    }

    render() {
        return (
            <div>
                <Row>
                    <Col s={12}>
                        <Home ref="home"/>
                        <About ref="about"/>
                        <Skills ref="skills"/>
                        <Projects ref="projects"/>
                        <Contact ref="contact"/>
                    </Col>
                    <Nav ref="nav"/>
                </Row>
            </div>
        );
    }
}

export default Layout;
